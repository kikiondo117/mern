const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
// * Middleware
const auth = require("../middleware/auth.middleware");
// ! Models
const User = require("../models/User.model");
const Contact = require("../models/Contact.model");

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { name, email, phone, type } = req.body;
    console.log(req.user);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  // * built contact object
  const contactFileds = {};
  if (name) contactFileds.name = name;
  if (email) contactFileds.email = email;
  if (phone) contactFileds.phone = phone;
  if (type) contactFileds.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(400).json({ msg: "Contact not found" });

    // * Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: contactFileds
      },
      { new: true }
    );

    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(400).json({ msg: "Contact not found" });

    // * Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contact removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

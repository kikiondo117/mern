//  Es el entry point de nuestro backend
const express = require("express");
const app = express();
const connectDB = require("./config/db.config");

const PORT = process.env.PORT || 5000;

// * Connect DB
connectDB();

// * Middleware
app.use(express.json({ extended: false }));

// * First Endpoint
// app.get("/", (req, res) => res.send("Hello World")); // ? Puedes enviar un string, archivo, json etc
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the  ContactKeeper API..." })
);

// * Define Routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/contacts", require("./routes/contacts.routes"));

app.listen(PORT, () => console.log(`Server starter on port ${PORT}`));

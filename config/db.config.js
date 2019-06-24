const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

//* Mongoose retorna promesas
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Error", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// ! Refactor code before

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     })
//     .then(() => console.log("MongoDB connected"))
//     .catch(error => {
//       console.log("Error", error.message);
//       process.exit(1);
//     });
// };

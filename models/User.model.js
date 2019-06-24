// Para modales la conveccion es la primera letra en mayuscula para los nombre de archivo
const mongoose = require("mongoose");

// * Los Schemas son objetos, practicamente son las colleciones
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("user", UserSchema);

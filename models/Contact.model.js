// Para modales la conveccion es la primera letra en mayuscula para los nombre de archivo
const mongoose = require("mongoose");

// * Los Schemas son objetos, practicamente son las colleciones
const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("contact", ContactSchema);

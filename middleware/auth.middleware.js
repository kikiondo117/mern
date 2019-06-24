// * El middleware solo es una funcion que tiene accesos al request y a la response sicle
//* Esto se hace para proteger las rutas privadas
const jwt = require("jsonwebtoken");
const config = require("config");

// *  El next es para indicar que se mueba a el siguiente middleware
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

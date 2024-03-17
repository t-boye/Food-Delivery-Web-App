const crypto = require("crypto");

function generateRandomSecret() {
  return crypto.randomBytes(32).toString("hex");
}

module.exports = {
  generateRandomSecret,
};

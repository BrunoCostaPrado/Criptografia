const { generateKeyPairSync } = require("crypto");
const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEnconding: {
    type: "pkcs8",
    format: "pem",
    cipher: "aes-256-cbc",
    passphrase: "secreto",
  },
});
console.log(publicKey);
console.log(privateKey);
module.exports = {
  privateKey,
  publicKey,
};

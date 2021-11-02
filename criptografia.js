const { createHash } = require("cripto");
function hash(input) {
  return createHash("sha256").update(input).digest("hex");
}
senha = "ola";
const hash2 = hash(senha);
const match = hash1 == hash2;

console.log(match ? "Senha boa" : "Senha ruim");


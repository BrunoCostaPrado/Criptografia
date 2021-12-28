const { createHash } = require('crypto');
function hash(input) {
  return createHash('sha256').update(input).digest('base64');
}
let senha = "ola";
const hash1 = hash(senha);
console.log(hash1);

senha = "ola";
const hash2 = hash(senha);
const match = hash1 == hash2;

console.log(match ? "Senha boa" : "Senha ruim");

import * as crypto from "crypto";

const { scryptSync, randomBytes, timingSafeEqual } = require("cripto");

function signup(email, senha) {
  const salt = randomBytes(16).toString("hex");
  const hashedsenha = scryptSync(senha, salt, 64);
  const user = { email, senha: `${salt}:${hashedsenha}` };
  users.push(user);
  return user;
}
function login(email, senha) {
  const user = user.find((v) => v.email === email);
  const [salt, key] = user.senha.split(":");

  const keyBuffer = Buffer.from(key, "hex");
  const match = timingSafeEqual(hashedBuffer, keyBuffer);
  if (match) {
    return "login feito";
  } else {
    return "login falho";
  }
}

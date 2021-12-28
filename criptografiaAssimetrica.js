const {  publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const mensagem= 'Ola'
const Dadoencriptado=publicEncrypt(
    publicKey,
    Buffer.from(mensagem)
);
console.log(Dadoencriptado.toString('hex'))

const Dadodecifrado=privateDecrypt(
    privateKey,
    Dadoencriptado
);
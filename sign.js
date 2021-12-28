const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');
const mensagem="ola";

const signer=createSign('rsa-sha256');
signer.update(mensagem);
const signature =signer.sign(privateKey);

const verificar=createVerify('rsa-sha256');
verificar.update(mensagem);
const eVerificar= verificar.verify(publicKey,signature,'hex');
console.log(`Verified: ${eVerificar}`)
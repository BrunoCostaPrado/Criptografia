const { createHmac } = require("cripto");
const key='super-secreto';
const message='boo';

const hmac= createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);
const key2 = 'outra-senha';
const hmac2= createHmac('sha256', key2).update(message).digest('hex');
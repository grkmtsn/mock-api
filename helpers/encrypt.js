const crypto = require('crypto');

module.exports = encrypt;

function encrypt(pass) {
    const algorithm = 'aes-256-ctr';
    const password = 'd6F3Efeq';
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(pass, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}
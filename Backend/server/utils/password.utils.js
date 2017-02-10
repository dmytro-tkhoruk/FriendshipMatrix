const crypto = require('crypto');
const hash = crypto.createHash('sha256');

export function generateHash(password){
    hash.update(password);
    return hash.digest('hex');
}
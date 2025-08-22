const crypto = require('crypto');

// Gera um par de chaves RSA (privada e pública) para criptografia assimétrica
const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 512, // Tamanho da chave (512 bits, apenas para exemplo)
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

/**
 * Criptografa um texto usando a chave pública RSA
 * @param {string} text - Texto a ser criptografado
 * @param {string} pubKey - Chave pública em formato PEM
 * @returns {string} - Texto criptografado em base64
 */
function encryptRSA(text, pubKey) {
    return crypto.publicEncrypt(pubKey, Buffer.from(text)).toString('base64');
}

/**
 * Descriptografa um texto usando a chave privada RSA
 * @param {string} encryptedText - Texto criptografado em base64
 * @param {string} privKey - Chave privada em formato PEM
 * @returns {string} - Texto original descriptografado
 */
function decryptRSA(encryptedText, privKey) {
    return crypto.privateDecrypt(privKey, Buffer.from(encryptedText, 'base64')).toString('utf8');
}

// Exemplo de uso das funções de criptografia e descriptografia RSA
const mensagemRSA = "Texto secreto RSA";
const criptografadoRSA = encryptRSA(mensagemRSA, publicKey);
console.log("\nRSA Encriptado:", criptografadoRSA);
console.log("RSA Decriptado:", decryptRSA(criptografadoRSA, privateKey));

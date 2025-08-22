// Importa o módulo 'crypto' do Node.js para operações criptográficas
const crypto = require('crypto');

// Define o algoritmo de criptografia simétrica (AES-256-CBC)
const algorithm = 'aes-256-cbc';
// Gera uma chave aleatória de 32 bytes para o AES-256
const key = crypto.randomBytes(32);
// Gera um vetor de inicialização (IV) aleatório de 16 bytes
const iv = crypto.randomBytes(16);

/**
 * Função para criptografar um texto usando AES-256-CBC
 * @param {string} text - Texto a ser criptografado
 * @returns {string} - Texto criptografado em hexadecimal
 */
function encryptAES(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

/**
 * Função para descriptografar um texto criptografado com AES-256-CBC
 * @param {string} encryptedText - Texto criptografado em hexadecimal
 * @returns {string} - Texto original descriptografado
 */
function decryptAES(encryptedText) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Exemplo de uso das funções de criptografia e descriptografia
const mensagem = "Texto secreto AES";
const criptografado = encryptAES(mensagem);
console.log("\nAES-256 Encriptado:", criptografado);
console.log("AES-256 Decriptado:", decryptAES(criptografado));

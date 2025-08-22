// Importa o módulo 'crypto' nativo do Node.js para operações criptográficas
const crypto = require('crypto');
// Importa o módulo 'bcryptjs' para hashing seguro de senhas
const bcrypt = require('bcryptjs');

// Define a senha que será utilizada para gerar os hashes
const senha = "minha_senha_super_secreta";

// Gera um hash SHA-256 da senha (hash fixo, sem salt)
// createHash cria o objeto de hash, update insere os dados, digest retorna o hash em hexadecimal
const sha256Hash = crypto.createHash('sha256').update(senha).digest('hex');
console.log("SHA-256 Hash:", sha256Hash);

// Define o número de rounds para o salt do bcrypt (quanto maior, mais seguro e mais lento)
const saltRounds = 14;

// Gera um hash da senha usando bcrypt (com salt)
// bcrypt.hash recebe a senha, o número de rounds e um callback para retornar o hash gerado
bcrypt.hash(senha, saltRounds, (err, bcryptHash) => {
    if (err) throw err;
    console.log("Bcrypt Hash:", bcryptHash);

    // Verifica se a senha fornecida corresponde ao hash gerado
    // bcrypt.compare compara a senha original com o hash e retorna true ou false no callback
    bcrypt.compare(senha, bcryptHash, (err, result) => {
        console.log("A senha está correta?", result);
    });
});

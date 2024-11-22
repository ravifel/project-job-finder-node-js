const express = require('express'); // chamar o express para o nosso projeto
const app = express(); // chamar o express para que seja criado um servidor para o projeto

const PORT = 3000; // inicar o servidor em uma porta

// fazer o express escutar a porta
app.listen(PORT, function () {
    console.log(`O Express está rodando na porta ${PORT}`);
});

// criação de rota
app.get('/', (require, response) => {
    response.send("Está funcionando 123");
});
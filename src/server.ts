import express from "express";

// @types/express
const app = express();

// GET => Buscar uma informação
// POST => Inserir (criar) uma informação
// PUT => Alterar uma informação
// DELETE => Remover um dado
// PATCH => Alterar uma informação específica

// Tipos de parâmetros
// Routes Params => https://localhost:3000/produtos/203985629472137
// Query Params => http://localhost:3000/produtos?name=teclado&price=200

// Body Params => {
//  "name" : "teclado",
//  "price" : 200
// }
//


app.get('/test', (request, response) => {
    // Request => Entrando
    // Response => Saindo

    return response.send('Vamos até o final')
});

app.post('/test-post', (request, response) => {
    // Request => Entrando
    // Response => Saindo

    return response.send('Vamos até o final')
})

app.listen(3333, () => console.log('Server is running'));
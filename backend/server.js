const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const alunos = [
    { id: 1, nome: "Matheus" },
    { id: 2, nome: "Marcus" },
    { id: 3, nome: "Paulo" }
];

app.get("/api/alunos", (req, res) => {
    res.json(alunos);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
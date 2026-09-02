const botao = document.getElementById("btnBuscar");
const listaAlunos = document.getElementById("listaAlunos");

botao.addEventListener("click", async () => {

    const resposta = await fetch("/api/alunos");

    const alunos = await resposta.json();

    listaAlunos.innerHTML = "";

    alunos.forEach(aluno => {

        const item = document.createElement("p");

        item.textContent = `${aluno.id} - ${aluno.nome}`;

        listaAlunos.appendChild(item);

    });

});
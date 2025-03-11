let tarefas = [];

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (tarefa === "") {
        mensagem.textContent = "O campo está vazio. Por favor, insira uma tarefa.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Tarefa '" + tarefa + "' adicionada com sucesso";
        mensagem.style.color = "green";
        tarefas.push(tarefa);
        renderizarTarefas();
    }
    inputTarefa.value = "";
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];

        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(i);

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarTarefa(i);

        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa);

        atualizarBotaoLimpar(); // Atualiza a visibilidade do botão
    }

}

function removerTarefa(i) {
    tarefas.splice(i, 1);
    renderizarTarefas();
    atualizarBotaoLimpar();
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:");
    if (tarefaEditada && tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        renderizarTarefas();
    }
}

function limparLista() {
    tarefas.length = 0;
    renderizarTarefas();
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Lista de tarefas limpa com sucesso!";
}

function atualizarBotaoLimpar() {
    const botaoLimpar = document.getElementById("botaoLimpar");
    botaoLimpar.style.display = tarefas.length > 1 ? "inline-block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarBotaoLimpar();
});

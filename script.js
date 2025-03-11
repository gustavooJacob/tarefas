let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    const mensagemCerto = document.getElementById("mensagem");
    const mensagemErrado = document.getElementById("mensagem");

    if (tarefa === "") {
        mensagemErrado.textContent = "O campo está vazio. Por favor, insira uma tarefa.";
        mensagemErrado.style.color = "red";
    } else {
        mensagemCerto.textContent = "Tarefa '" + tarefa + "' adicionada com sucesso";
        mensagemCerto.style.color = "green";
        tarefas.push(tarefa) 
        renderizarTarefas()
    }
    inputTarefa.value = "";
}

function renderizarTarefas () {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""

    let i = 0;
    for (i; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];
        listaTarefas.appendChild(novaTarefa);
    }
}

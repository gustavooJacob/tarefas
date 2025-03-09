function adicionarTarefa() {
    // Pega o que está no input (campo de texto)
    let inputTarefa = document.getElementById("inputTarefa");
    // Remove espaços extras no início e no final da string
    let tarefa = inputTarefa.value.trim(); 

    // Verifica se o campo de entrada está vazio
    if (tarefa === "") {
        // Exibe a mensagem de erro se o campo estiver vazio
        document.getElementById("mensagem").textContent = "O campo está vazio. Por favor, insira uma tarefa.";
    } else {
        // Caso o campo não esteja vazio, exibe uma mensagem de sucesso
        document.getElementById("mensagem").textContent = "Tarefa '" + tarefa + "' adicionada com sucesso";
        
        // Busca o elemento da lista de tarefas na página
        let listaTarefas = document.getElementById("listaTarefas");
        // Cria um novo item de lista (<li>) para a nova tarefa
        let novaTarefa = document.createElement("li");

        // Define o texto do novo item de lista como o valor da tarefa inserida
        novaTarefa.textContent = tarefa;
        // Adiciona a nova tarefa à lista de tarefas
        listaTarefas.appendChild(novaTarefa);

        // Limpa o campo de entrada para permitir adicionar uma nova tarefa
        inputTarefa.value = "";
    }
}

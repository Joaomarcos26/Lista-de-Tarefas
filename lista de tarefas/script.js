function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const tarefaTexto = tarefaInput.value;
    
    if (tarefaTexto !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefaTexto;
        document.getElementById('tarefas').appendChild(novaTarefa);
        tarefaInput.value = '';
    }
}
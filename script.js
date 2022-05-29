const newTaskInput = document.querySelector(".new-task-input");
const newTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");


// verifica se input esta vazio e retorna boolean
const validateInput = () => {
    return newTaskInput.value.trim().length > 0;
}

// acrescenta formatacação de erro caso input esta vazio
const errorInput = () => {
    const inputIsvalid = validateInput();

    if (!inputIsvalid) {
        newTaskInput.classList.add("error");
    } else {
        newTaskInput.classList.remove("error");
    }
}

// criar a estrutura do elemento tarefa
const criarElementos = () => {

    // cria div das tarefas
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    tasksContainer.appendChild(taskItem);

    // cria o elemento nome da tarefa
    const nomeTarefa = document.createElement("p");
    nomeTarefa.innerText = newTaskInput.value;
    taskItem.appendChild(nomeTarefa);

    // Ao clicar na tarefa chama funcao de conclusao
    nomeTarefa.addEventListener("click", () => handleTarefaConcluida(nomeTarefa));

    // cria o icone de lixeira para apagar tarefa
    const deleteTarefa = document.createElement("i");
    deleteTarefa.classList.add("fa-solid");
    deleteTarefa.classList.add("fa-trash-can");
    taskItem.appendChild(deleteTarefa);

    deleteTarefa.addEventListener("click", () => handleDeletetarefa(taskItem));

}

const handleTarefaConcluida = (nomeTarefa) => {
    nomeTarefa.classList.toggle("completed");
}

const handleDeletetarefa = (taskItem) => {
    taskItem.remove();
}

const criarTarefa = () => {
    errorInput();
    const inputIsvalid = validateInput();

    if (inputIsvalid) {
        criarElementos();
        newTaskInput.value = "";
    }
}

newTaskButton.addEventListener("click", criarTarefa);
newTaskInput.addEventListener("focusout", errorInput);


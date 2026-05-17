let tarefas = []
const mensagem = document.getElementById("mensagem")

function adicionarTarefa() {

    const inputTarefa = document.getElementById("inputTarefa") // aqui criamos uma variável com o mesmo nome do id do input do html e vamos pegar o id e "adicionar" a variável
    let tarefa = inputTarefa.value.trim() // criamos uma variável tarefa e por meio do .value vamos pegar o que a pessoa digitou
    
    if (tarefa == "") {
        let mensagemErro = "Por favor insira um tarefa válida!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "red"

    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"; // cria uma variável que vai receber essa mensagem
        mensagem.textContent = mensagemSucesso; //estamos mostrando na tela a mensagem quando apertar o botão
        mensagem.style.color = "green"
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = "" // quando a pessoa enviar a tarefa, vai sumir o texto digitado

    }

    function renderizarTarefas() {
        const listaTarefas = document.getElementById("listaTarefas") 
        listaTarefas.innerHTML = ""

        for (let i = 0; i < tarefas.length; i++){
            let novaTarefa = document.createElement("li") 
            novaTarefa.textContent = tarefas[i]
            
            let botaoRemover =  document.createElement("button")
            novaTarefa.appendChild(botaoRemover)
            botaoRemover.className = "remover"
            botaoRemover.textContent = "Remover"
            botaoRemover.onclick = () => removerTarefa(i)

            let botaoEditar = document.createElement("button")
            botaoEditar.className = "editar"
            botaoEditar.textContent = "Editar"
            
            botaoEditar.onclick = () => editarTarefa(i)
            novaTarefa.appendChild(botaoEditar)

            listaTarefas.appendChild(novaTarefa)    
            
        }
    }

    function removerTarefa(i) {
        tarefas.splice(i, 1)
        renderizarTarefas()
    }

    function editarTarefa(i) {
        let tarefaEditada = prompt ("Edite a tarefa:")
        if(tarefaEditada !== null && tarefaEditada.trim() !== "") {
            tarefas[i] = tarefaEditada
            renderizarTarefas()
        }
    }

    function limparLista() {
        tarefas.length = 0
        renderizarTarefas()
        mensagem.textContent = "Lista limpa com sucesso!"

        
    }
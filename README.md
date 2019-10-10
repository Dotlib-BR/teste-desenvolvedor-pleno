[![](http://www.dotlib.com.br/site/images/footer/bra.png)](http://www.dotlib.com)

## Dependências
- Nodejs 12
- NPM 6+
- Knex
- Docker
- Docker Compose

## Como rodar o projeto

Dentro do diretório do projeto, rodar o seguinte comando:

- `sudo docker-compose up --build -d`
Este comando ir inicializar uma instancia do MYSQL e a API.

Após o término do comando acima, rodar o seguinte comando: 

- `npm run migrate`
Este comando irá iniciar um database preparado para o consumo da aplicação.

Após o término do comando acima, basta acessar:

- `http://localhost:4000`

## Exemplos de Query e Mutation

### Buscar uma Tarefa específica baseada em seu ID.
```js
query getTask($id: Int) {
  task(id: $id){
    id
    name
  }
}
``` 

### Buscar uma lista de Tarefas(getAll).

Verificar opções de parametros disponíveis dentro do Playground.

```js
query getAllTasks($offset: Int, $limit: Int) {
  tasks(offset: $offset, limit: $limit) {
    list{
      id
      name      
    }
  }
}
``` 

### Criar uma Tarefa
```js
mutation CreateTask($taskInput: TaskInput!) {
  createTask(task: $taskInput) {
    id
    name
  }
}
``` 

### Atualizar uma tarefa
```js
mutation UpdateTask($taskInput: UpdateTaskInput!) {
  updateTask(task: $taskInput) {
    id
    name
  }
}
``` 

### Deletar uma Tarefa
```js
mutation DeleteTask($id: Int!) {
  deleteTask(id: $id)
}
```



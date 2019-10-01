## Requisitos
Para rodas esta aplicação é necessário os seguintes módulos, frameworks e aplicações:
- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- BabelJS
 
## API
Esta aplicação expõe uma api RESTful com os seguintes endpoints:
- `[GET] /todos`: Lista todas as listas de tarefas.
- `[GET] /todos/:id`: Busca uma lista de tarefas específicada por `id`.
- `[POST] /todos`: Cria uma nova lista de tarefas.
- `[PUT] /todos/:id`: Sobrescreve uma lista de tarefas por `id`.
- `[PATCH] /todos/:id`: Atualiza uma lista de tarefas especificada por `id`.
- `[DELETE] /todos/:id`: Deleta uma lista de tarefas por `id`.
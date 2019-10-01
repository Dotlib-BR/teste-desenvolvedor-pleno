Para rodar esta aplicação basta executar o camando `docker-compose up`. Caso seja a primeira execução, então: ``docker-compose up --build`.
 
## API
Esta aplicação expõe uma api RESTful com os seguintes endpoints:
- `[GET] /todos`: Lista todas as listas de tarefas.
- `[GET] /todos/:id`: Busca uma lista de tarefas específicada por `id`.
- `[POST] /todos`: Cria uma nova lista de tarefas.
- `[PUT] /todos/:id`: Sobrescreve uma lista de tarefas por `id`.
- `[PATCH] /todos/:id`: Atualiza uma lista de tarefas especificada por `id`.
- `[DELETE] /todos/:id`: Deleta uma lista de tarefas por `id`.
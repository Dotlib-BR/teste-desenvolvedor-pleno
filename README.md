Para rodar esta aplicação basta executar o camando docker-compose up. 
Caso seja a primeira execução, então: docker-compose up --build.

Ao executar o comando acima, basta fazer requisições com curl ou ferramentas como postman ou insomnia

API
Esta aplicação expõe uma api RESTful com os seguintes endpoints:

[GET] /todo/index: Lista todas as tarefas.
[GET] /todo/show/:id: Busca uma tarefa específica por id.
[POST] /todo/store: Cria uma nova tarefa.
[PUT] /todo/update/:id: Atualiza uma tarefa por id.
[DELETE] /todo/delete/:id: Deleta uma tarefa por id.

Possui parte de um sistema de teste unitário utilizando mocha

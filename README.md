<h1 align="center">
  <br>
  <a href="https://dotlib.com/en"><img src="https://jornadas.fccn.pt/wp-content/uploads/2018/02/dotlib.png" alt="Parafernalia Interativa" width="200"></a>
  <br>
</h1>

<h4 align="center">Desafio Técnico desenvolvido para a <a href="https://dotlib.com/en" target="_blank">dot.lib</a>.</h4>


<p align="center">
  <a href="#Introdução">Introdução</a> •
  <a href="#Pré-requisitos">Pré requisitos</a> •
  <a href="#Rodando-o-projeto">Rodando o Projeto</a> •
  <a href="#Deployment">Deployment</a> •
  <a href="#Built-With">Built With</a> •
  <a href="#Autor">Autor</a> •
</p>


## API TODO's

API, utilizando Node.JS, para uma aplicação de gerenciamento de TODO's.

### Rodando o projeto

Para rodar o projeto na sua maquina e ter acesso ao core;

Após a instação do node e github e docker localmente vamos precisar rodar alguns comandos no seu terminal de comando:

```
git clone https://github.com/RafaelMouraFrontend/teste-desenvolvedor-pleno
```
```
npm install
```
```
npm start
```
Abra uma nova guia do terminal e execute o comando docker para rodar o banco em mongo
```
docker run -p 27017:27017 --rm --name api-db -d mongo
```

A idea da api é o desacoplamento e consumir da forma que você acha melhor, isso pode incluir algumas ferramentas como Postman, insomnia ou cURL, nos exemplos abaixo optei em consumir as rotas pela linha de comando com o cURL.

### /POST
```
curl http://localhost:3000/api/v1/todos -X POST \
-H "Content-Type: application/json" \
-d '{"name":"enviando um post"}'

```
Esse comando é usado para enviar o TODO 
*campo body obrigatório

### /GET
```
curl -i http://localhost:3000/api/v1/todos
```
Esse campo é usado para listar TODO's

### /GET
```
curl -i http://localhost:3000/api/v1/todos/d968bce73c95d3ffac14db8
```
Esse campo é usado para listar TODO especifico por id{d968bce73c95d3ffac14db8}


### /DELETE
```
curl -X "DELETE" http://localhost:3000/api/v1/todos/5d968bce73c95d3ffac14db8
```
*no campo delete é obrigatrío inserir o ID após o recurso, no caso do nosso exemplo seria {5d968bce73c95d3ffac14db8}


### /PUT
```
curl http://localhost:3000/api/v1/todos/5d968ceb73c95d3ffac14db9 -X PUT \
-H "Content-Type: application/json" \
-d '{"name": "atualizando com put"}'
```
*no campo delete é obrigatrío inserir o ID após o recurso, no caso do nosso exemplo seria {5d968bce73c95d3ffac14db8}

## Built With
* Node
* mongoose
* Hapi
* Docker

## Autor

* **Rafael Moura** - [Linkedin](https://www.linkedin.com/in/rafaelmouradev/)

## Considerações finais

A proposta foi apresetar os meus conhecimentos como dev Frontend, foi interessante também como forma de reforçar e aprender alguns conceitos como API em node para react em que utilizei o framework hapi pela primeira vez

Como todo projeto sempre pode ficar melhor se eu tivesse a oportunidade de trabalhar um pouco mais nele eu teria:
Trabalhado melhor algumas validações

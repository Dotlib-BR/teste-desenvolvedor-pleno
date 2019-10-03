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
npm start

```
Abra uma nova guia do terminal e execute o comando docker para rodar o banco em mongo
```
docker run -p 27017:27017 --rm --name api-db -d mongo
```

A idea da api é o desacoplamento e consumir da forma que você acha melhor, isso pode incluir algumas ferramentas como Postman, insomnia ou cURL, nos exemplos abaixo optei em consumir as rotas pela linha de comando com o cURL.



## Built With
* Node
* mongoose
* Hapi
* Docker

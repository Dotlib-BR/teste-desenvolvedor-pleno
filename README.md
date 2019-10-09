## Pré-Requisitos

Instalar Node.js v8.16.1 para cima.  
Instalar [MongoDB](https://docs.mongodb.com/manual/administration/install-community/).

## Rodar API

Com o repositório clonado:  
Rodar o comando `npm install` para a instalação dos modulos.  
Rodar o comando `mongod` para iniciar o banco.  
Rodar o comando `mongo todoAPI < todosJson.js` para popular o banco.  
Rodar o comando `npm start` para iniciar a API.  

## Rotas

localhost:4000/api/todos - Pega todos os Todo's ou cria um Todo  
* É possível usar o parametro ?done= para filtrar pelos que foram completos ou não.  

localhost:4000/api/todos/ID - Pega/Altera/Atualiza/Deleta um Todo  

## Estrutura Para manipular os requests
```
{
	task: { type: String },
	person: { type: String },
	date: { type: Date },
	done: { type: Boolean, default: false }
}
```
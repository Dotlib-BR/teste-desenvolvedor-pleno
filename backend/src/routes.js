const routes = require('express').Router();

routes.get('/', async (req,res) => {
    return res.send({
		name: 'API Todos',
		info:{
			title: 'TODO',
			description: 'API para um serviço de gestão de Todos, teste para DotLib feito por Renato Lins',
			license:{
				name: 'MIT License',
				url: 'https://opensource.org/licenses/MIT'
			},
			version: '1.0.0'
		},
		urls:{
			get: `${process.env.APP_URL}/todos`
		}
	});
});

module.exports = routes;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';

const Routes = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/todo/index')
            .then(response => {
                return response.json();
            })
            .then(response => {
                setTodo(response);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const Criar = todoName => {
        fetch('http://localhost:4000/todo/store',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ name: todoName })
            })
            .then(response => {
                return response.json();
            })
            .then(newTodo => {
                setTodo([...todo, newTodo]);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const Editar = newTodo => {
        fetch('http://localhost:4000/todo/update/' + newTodo._id,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({ name: newTodo.name })
            })
            .then(() => {
                let previousTodo = todo.filter(t => t._id !== newTodo._id);
                setTodo([...previousTodo, newTodo]);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const Deletar = id => {
        fetch('http://localhost:4000/todo/delete/' + id, { method: 'delete' })
            .then(() => {
                let newTodo = todo.filter(t => t._id !== id)
                setTodo(newTodo);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home Deletar={(id) => Deletar(id)} todo={todo} />
                </Route>
                <Route exact path="/edit/:id">
                    <Edit Editar={(id) => Editar(id)} todo={todo} />
                </Route>
                <Route exact path="/create">
                    <Create Criar={(id) => Criar(id)} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
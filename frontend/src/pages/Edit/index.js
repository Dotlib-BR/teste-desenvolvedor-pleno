import React, { useEffect, useState } from 'react';
import { Button, InputGroup, FormControl, Container } from 'react-bootstrap';
import { withRouter  } from "react-router-dom";
import { Link } from "react-router-dom";

const Edit = (props) => {
    const [todo, setTodo] = useState('');

    useEffect(() => {
        const t = props.todo.filter(t => t._id == props.match.params.id);
        if(t[0]) {
            setTodo(t[0]);
        }else{
            props.history.push("/");
        }
    }, []);

    return (
        <Container>
            <h3 style={{marginTop: 30}}>Editar Todo</h3>
            <InputGroup className="mb-3" style={{marginTop: 15}}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Nome</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={todo.name}
                    onChange={(e) => setTodo({...todo, 'name': e.target.value})}
                />
                <Button onClick={() => { props.Editar(todo); props.history.push('/')}} variant="success">Editar</Button>
            </InputGroup>
            <Link to={"/"}><Button variant="info">Voltar</Button></Link>
        </Container>
    )
}

export default withRouter(Edit);

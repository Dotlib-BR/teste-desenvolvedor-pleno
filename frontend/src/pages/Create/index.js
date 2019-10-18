import React, { useState } from 'react';
import { Button, InputGroup, FormControl, Container } from 'react-bootstrap';
import { withRouter  } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = (props) => {
    const [todoName, setTodoName] = useState('');

    return (
        <Container>
            <h3 style={{marginTop: 30}}>Criar Todo</h3>
            <InputGroup className="mb-3" style={{marginTop: 15}}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Nome</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                />
                <Button onClick={() => { props.Criar(todoName); props.history.push('/')}} variant="success">Criar</Button>
            </InputGroup>
            <Link to={"/"}><Button variant="info">Voltar</Button></Link>
        </Container>
    )
}

export default withRouter(Create);

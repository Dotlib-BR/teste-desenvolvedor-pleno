import React from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

const Home = (props) => {
    const columns = [
        {
            name: '#',
            selector: '_id',
            sortable: true,
            maxWidth: '220px'
        },
        {
            name: 'Título',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Ações',
            sortable: true,
            cell: row => <><Link to={"/edit/" + row._id}><Button style={{ marginRight: 5 }} variant="warning">Editar</Button></Link> <Button variant="danger" onClick={() => props.Deletar(row._id)}>Deletar</Button></>,
            maxWidth: '200px'
        },
    ];

    return (
        <>
            <Link to={"/create"}><i style={{ float: "right", position: "relative", top: 50, color: "green", fontSize: 30, marginTop: 40, marginRight: 10, cursor: 'pointer', zIndex: 1 }} className="fas fa-plus-circle"></i></Link>
            <DataTable
                title="Tarefas"
                columns={columns}
                data={props.todo.length > 0 ? props.todo : []}
                pagination={true}
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5,10,15,20]}
            />
        </>
    )
}

export default Home;

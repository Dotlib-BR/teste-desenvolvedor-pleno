import React, { Component } from 'react';

//
//  Serviços 
//
import Api from './../../Services/Api';
import Util from './../../Services/Util';

//
//  Styles
//
import './styles.css';

//
//  Images
//
import boy from './../../Assets/boy.svg';

//
//  Componente
//
export default class Home extends Component {

    //
    //  Construtor
    //
    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            Todos:[],
            pagination:{
                paginaAtual:'',
                totalPaginas:'',
                qtdTotalTodos:'',
                showQtd:''
            },
            qtdDefinida:[
                { valor:5, label:'5 todos/pág' },
                { valor:10, label:'10 todos/pág' },
                { valor:25, label:'25 todos/pág' },
                { valor:50, label:'50 todos/pág' },
                { valor:100, label:'100 todos/pág' }
            ]
        }
    }

    //
    //  Montagem do componente após render
    //
    componentDidMount(){
        this.loadTodos( Util.getCurrentPage(), Util.getQtdResults() );
    }

    //
    //  Carrega os Todos com os parametros pagina e qtd items a serem mostrados
    //
    loadTodos = (page, size) => {
        this.setState({isLoading: true})
        let params = '?page=' + page + '&size=' + size;
        Api.getTodos(params).then(res=>{
            this.setState({
                isLoading:false,
                todos: res.data.Todos,
                pagination:{
                    paginaAtual: Number(page),
                    totalPaginas: Number(res.data.paginas),
                    qtdTotalTodos: Number(res.data.total),
                    showQtd: Number(size)
                }
            })
        })
        this.props.history.push(`/${params}`)
    }

    //
    //  Paginação
    //
    handlePag = (nextPage) => {
        this.loadTodos(nextPage, this.state.pagination.showQtd );
    }

    //
    //  Filtro quantidade de itens a serem mostrados
    //
    handleChanges = (e) => {
        this.setState({  pagination:{ showQtd: e.target.value } });
        this.loadTodos('1', e.target.value );
    }

    //
    //  Remover um Todo
    //
    deletarTodo = id => {
        this.setState({isLoading:true})
        Api.removerTodo(id).then( res => {
            
            const listaCotatos = this.state.todos.filter( todo => {
                return todo._id !== id;
            });

            this.setState({ todos: [...listaCotatos], isLoading:false });

        }).catch(err => {
            console.log(err);
        });
  
    }

    //
    //  Render da aplicação
    //
    render() {

        let paginacao = this.state.pagination;

        return (
            <div className="page">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="pageHeader">
                                <h1>Lista de tarefas</h1>
                            </div>
                        </div>
                    </div>
   
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-8">
                            <div className="filtros">
                                <div className="sStl">
                                    <select name="filtro" value={this.state.pagination.showQtd} onChange={this.handleChanges} >
                                        { this.state.qtdDefinida.map((item,idx)=>(
                                            <option key={idx} value={item.valor}>{item.label}</option>
                                        )) }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    { this.state.isLoading &&
                        <div className="loading"></div>
                    }
                   
                    { !this.state.isLoading &&
                    <React.Fragment>

                    <div className="row">
                       
                        { this.state.todos.map(todo=>(
                            <div key={todo._id} className="col-xs-12 col-sm-6">
                                <div className="card" >
                                    <figure>
                                        <img src={boy} alt={todo.titulo} />
                                    </figure>
                                    <div className="info">
                                        <h2>{todo.titulo}</h2>
                                        <p><strong>Responsável:</strong> {todo.responsavel}</p>
                                        { todo.tarefa &&
                                        <div className="descricao">
                                            <p>{todo.tarefa}</p>
                                        </div>
                                        }
                                    </div>
                                    <div className="actions">
                                        <button className="edit" onClick={()=>{this.props.history.push(`/edit/${todo._id}`)}} ><span>Editar</span></button>
                                        <button className="remove" onClick={(e)=>this.deletarTodo(todo._id)} ><span>Remover</span></button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
    
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="pagination">
                                <ul>

                                    { paginacao.paginaAtual > 1 &&
                                        <li><button onClick={()=> this.handlePag(paginacao.paginaAtual - 1) }><span className="prev"></span></button></li>
                                    }
                                    
                                    { paginacao.paginaAtual > 1 && paginacao.paginaAtual >= 3 &&
                                        <li><button onClick={()=> this.handlePag(1) }>1</button></li>
                                    }
                                    
                                    { (paginacao.paginaAtual - 2) > 1 && <li><span>...</span></li> }

                                    { (paginacao.paginaAtual - 1) >= 1 && <li><button onClick={()=> this.handlePag(paginacao.paginaAtual-1) }>{paginacao.paginaAtual-1}</button></li> }
                                        
                                    <li className="active"><span>{ paginacao.paginaAtual }</span></li>
                                    
                                    { (paginacao.paginaAtual + 1) <= paginacao.totalPaginas && <li><button onClick={()=> this.handlePag(paginacao.paginaAtual+1) }>{paginacao.paginaAtual+1}</button></li> }

                                    { (paginacao.paginaAtual + 2) < paginacao.totalPaginas && <li><span>...</span></li> }

                                    { paginacao.paginaAtual < paginacao.totalPaginas && paginacao.paginaAtual <= ( paginacao.totalPaginas - 2 ) &&
                                        <li><button onClick={()=> this.handlePag(paginacao.totalPaginas) }>{paginacao.totalPaginas}</button></li>
                                    }

                                    { paginacao.paginaAtual < paginacao.totalPaginas &&
                                    <li><button onClick={()=> this.handlePag(paginacao.paginaAtual+1) }><span className="next"></span></button></li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}

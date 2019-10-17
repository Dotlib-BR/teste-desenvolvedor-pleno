import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

//
//  Services
//
import Api from '../../Services/Api';

//
//  Styles
//
import './styles.css';

export default class Edit extends Component {

        //
    //  Constructor
    //
    constructor(props){
        super(props);
        this.state = {
            titulo:'',
            responsavel:'',
            tarefa:'',
            error:{
                titulo:{
                    value:true,
                    msg:'',
                },
                responsavel: {
                    value:false,
                    msg:'',
                },
                tarefa: {
                    value:true,
                    msg:'',
                },
            }
        }
    }

    componentWillMount(){
        this.loadTodo(this.getId());
    };

    //
    //  Get ID Param
    //
    getId(){
        return this.props.match.params.id
    }

    validateMin(field, min = 3){ 
        const { error, ...rest } = this.state;
        ( this.state[field].length < min ) ? error[field] = { value: true, msg: `Campo ${field} precisa ter no mín ${min} caracteres` } : error[field] = { value: false, msg: '' }
        const newState = { ...rest, error:{ ...error  } }
        this.setState({ newState  })
    }

    //
    //  Carrega o TODO
    //
    loadTodo = id => {
        Api.getTodoId(id).then( res => {
            const {titulo, responsavel, tarefa, _id : id} = res.data.todo;
            this.setState({ titulo, responsavel, tarefa, id })
        })
    }
 
    //
    //  Change events
    //
    handleChanges = e => {
        const target = e.target;
        const fieldName = target.name;
            this.setState({ 
                [fieldName] : e.target.value 
            }, () =>{
                
                if ( fieldName === 'titulo')
                    this.validateMin(fieldName);
                
                if ( fieldName === 'responsavel')
                    this.validateMin(fieldName);

                if ( fieldName === 'tarefa')
                    this.validateMin(fieldName); 
            })
   
    };

    //
    //  Submit
    //
    handleSubmit = async e => {
        e.preventDefault();
        const { titulo, responsavel, tarefa } = this.state;
        const todo = {titulo, responsavel, tarefa};
        const errors = this.state.error;
        if ( !errors.titulo.value && !errors.responsavel.value && !errors.tarefa.value  ){
            try{
                await Api.putTodo(this.getId(), todo);
                this.props.history.push('/');
            } catch(err) {
                console.log(err);
            }
        }
    }

    //
    //  Render
    //
    render() {

        const sState = this.state;
        const sError = sState.error;
       
        return (
           <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-md-offset-3">
                            <div className="boxRegister">
                                <header>
                                    <h2>Nova tarefa</h2>
                                    <Link to={`/`} className="back"><span>Home</span></Link>
                                </header>
                                <div className="content">
                                    <form onSubmit={this.handleSubmit}>
                                        <fieldset>
                                            <legend>Registro</legend>
                                            <div className="formGroup">
                                                <input type="text" name="titulo" onBlur={this.handleChanges} value={sState.titulo} placeholder="titulo" onChange={this.handleChanges} />
                                                { sError.titulo.value && sError.titulo.msg !== '' && 
                                                    <span className="msgErro">{sError.titulo.msg}</span>
                                                }
                                            </div>
                                            <div className="formGroup">
                                                <input type="text" name="responsavel" onBlur={this.handleChanges} value={sState.responsavel} onChange={this.handleChanges} placeholder="responsavel" />
                                                { sError.responsavel.value && 
                                                    <span className="msgErro">{sError.responsavel.msg}</span>
                                                }
                                            </div>
                                            <div className="formGroup">
                                                <input type="text" name="tarefa" onBlur={this.handleChanges} value={sState.tarefa} onChange={this.handleChanges} placeholder="tarefa" />
                                                    { sError.tarefa.value && 
                                                        <span className="msgErro">{sError.tarefa.msg}</span>
                                                    }
                                            </div>
                                            <div className="formGroup">
                                                
                                                { !sError.titulo.value && !sError.responsavel.value && !sError.tarefa.value &&
                                                    <button type="submit">Atualizar tarefa</button>
                                                }
                                               
                                                { ( sError.titulo.value || sError.responsavel.value || sError.tarefa.value) &&
                                                    <button type="submit" disabled>Atualizar tarefa</button>
                                                }

                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

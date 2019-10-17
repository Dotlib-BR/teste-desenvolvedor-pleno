import React from 'react';
import { NavLink } from 'react-router-dom';

//
//  Styles
//
import './styles.css';

const Navigation = () => {
    return (
        <div id="menu">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to={`/`}>Lista</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/create`}>Nova Tarefa</NavLink>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/renatolinsjr">GitHub</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;

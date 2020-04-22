import React from 'react';
import './style.css';
import herosImg from '../../assets/img/heroes.png';
import logoImg from '../../assets/img/logo.svg';

import { Link } from 'react-router-dom';//Dependência de rotas
/*
    a props Link, faz com que mude de rota sem recarregar totalmente a página
*/
import {FaSignInAlt} from 'react-icons/fa';

export default function LogOn(  ){
    return(
        
        <div className="logonContainer">
            <section className="form">
                <img src={logoImg} alt="Be The Hero!!"/>
                <form>
                    
                    <h1>Faça seu Logon!</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    
                    <Link className="back-link" to="/cadastro">
                        <FaSignInAlt size={16} color='#E02041' /> 
                        Não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src={herosImg} alt="Heroes!"/>
        </div>

    );

}

import React, { useState } from 'react';
import './style.css';
import herosImg from '../../assets/img/heroes.png';
import logoImg from '../../assets/img/logo.svg';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';//Dependência de rotas
/*
    a props Link, faz com que mude de rota sem recarregar totalmente a página
*/
import {FaSignInAlt} from 'react-icons/fa';

export default function LogOn(){

    const hist = useHistory();

    const [id, mudaId] = useState('') ;

    async function handleLogon(e){
        e.preventDefault();

        if(id === ""){
            alert(`Preencha o Campo ID!`);
            return false
        }

        try{

            const response = await api.post('session', { id });
            
            localStorage.setItem('id_ong',id);
            localStorage.setItem('name_ong', response.data.name);

            hist.push('profile');

        }catch(err){

            alert(`Falha no login, tente novamente.`)
        }

    }

    return(
        
        <div className="logonContainer">
            <section className="form">
                <img src={logoImg} alt="Be The Hero!!"/>
                <form onSubmit={handleLogon}>
                    
                    <h1>Faça seu Logon!</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => mudaId(e.target.value)}
                    />
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

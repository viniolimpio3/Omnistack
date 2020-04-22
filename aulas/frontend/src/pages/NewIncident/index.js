import React from 'react';

import './style.css';
import logoImg from '../../assets/img/logo.svg';

import { Link } from 'react-router-dom';
import {FiPower, FiArrowLeft} from 'react-icons/fi';
import {FaTrash} from 'react-icons/fa';

export default function NewIncident(){
    return(
        <div className="newIncidentContainer">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1 style={{marginTop:15}}>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente com o objtivo de que um herói resolva isso.</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color='#E02041' /> 
                        Voltar para home
                    </Link>

                </section>
                <form>
                    <input placeholder="Título do Caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em R$" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
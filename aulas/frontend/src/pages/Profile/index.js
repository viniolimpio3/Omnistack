import React from 'react';

import './style.css';
import logoImg from '../../assets/img/logo.svg';

import { Link } from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import {FaTrash} from 'react-icons/fa';

export default function Profile(){
    return(
        <div className="containerProfile">
            <header>
                <img src={logoImg} alt="Be The Hero!"/>
                <span>Bem Vinda, ONG</span>

                <Link className="button" to="incidents/new">
                    Cadastrar novo Caso
                </Link>
                <button type="button" >
                    <FiPower size={18} color="#E02041" />
                </button>

            </header>
            <h1>Casos Cadastrados</h1>
            
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                    <button type="button"><FaTrash size={20} color="#a8a8b3"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                    <button type="button"><FaTrash size={20} color="#a8a8b3"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                    <button type="button"><FaTrash size={20} color="#a8a8b3"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                    <button type="button"><FaTrash size={20} color="#a8a8b3"/></button>
                </li>
            </ul>
        </div>
        
    );

}
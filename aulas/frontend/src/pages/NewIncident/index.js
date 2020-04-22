import React, { useState } from 'react';

import './style.css';
import logoImg from '../../assets/img/logo.svg';

import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const ongId = localStorage.getItem('id_ong');
    const hist = useHistory();

    async function handleNewIncident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            console.log(data);
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            alert(`Caso ${title}, cadastrado com sucesso!!`);
            hist.push('/profile');
        } catch (error) {
            alert("Erro ao tentar adicionar o caso, tente novamente!");
        }
    }

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
                <form onSubmit={handleNewIncident} >
                    <input 
                        placeholder="Título do Caso" 
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea   
                        placeholder="Descrição" 
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input 
                        placeholder="Valor em R$" 
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
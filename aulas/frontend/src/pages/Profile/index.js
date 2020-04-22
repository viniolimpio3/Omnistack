import React, {useState, useEffect} from 'react';

import './style.css';
import logoImg from '../../assets/img/logo.svg';

import { Link, useHistory } from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import {FaTrash} from 'react-icons/fa';
import api from '../../services/api'

export default function Profile(){
    const hist = useHistory();
    const ongName = localStorage.getItem('name_ong');
    const ongId = localStorage.getItem('id_ong');

    const [incidents, setIncidents] = useState([]);
    
    useEffect(() =>{//useEffet é uma função do react que ao alterar o segundo parâmetro, executa uma function dentro do 1º parâmetro
        //usar o .then tem o mesmo resultado de await
        api.get('profile',{
            headers:{
                Authorization:ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId]);//sempre que ongId mudar, ele faz a requisição na api

    function logout(){
        localStorage.clear();
        hist.push('/')
    }

    async function deleteIncident(key){
        try{
            await api.delete(`incidents/${key}`,{//passando a url de remover o caso específico
                headers:{
                    Authorization:ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== key));//mantenho na interface, todos incidents com id != do que deletei!!

        }catch(err){
            alert('Falha ao deletar caso. Tente novamente');
        }

    }

    return(
        <div className="containerProfile">
            <header>
                <img src={logoImg} alt="Be The Hero!"/>
                <span>Bem Vinda, {ongName} </span>

                <Link className="button" to="incidents/new">
                    Cadastrar novo Caso
                </Link>
                <button onClick={logout} type="button" >
                    <FiPower size={18} color="#E02041" />
                </button>

            </header>
            <h1>Casos Cadastrados</h1>
            
            <ul>
                {incidents.map(incident =>{
                    return(
                        <li key={incident.id} >
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p> {Intl.NumberFormat('pt-br', {style:'currency', currency:'BRL'}).format(incident.value)} </p>
                            <button onClick={ () => deleteIncident(incident.id) } type="button" style={{background:"transparent"}} ><FaTrash size={20} color="#a8a8b3"/></button>
                        </li>
                    );
                })}
                
            </ul>
        </div>
        
    );

}
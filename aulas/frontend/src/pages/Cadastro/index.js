import React,{ useState } from 'react';

import './style.css';
import logoImg from '../../assets/img/logo.svg';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

export default function Cadastro(){

    const[name, setName] = useState('');//cria o estado name com valor inicial vazio
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[cidade, setCidade] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();

    //responsável por registrar
    async function handleRegister(event){
        event.preventDefault();//não permite que onSubmit do form, recarregue a página
        
        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf
        }

        try{
            const response = await api.post('ongs', data);//axios envia para o metodo create (ongs)
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');//envia para a rota raíz (método do react-router-dom)
            
        }catch(e){
            alert('Erro. Não foi possível Cadastrar uma nova Ong');
        }            
    }

    return(
        <div className="containerCadastro">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadatro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color='#E02041' /> 
                        Voltar para o Logon
                    </Link>

                </section>
                <form onSubmit={handleRegister} >
                    <input 
                        placeholder="Nome da Ong" 
                        value={name}
                        onChange={ event => setName(event.target.value) }//quando ocorrer alteração no input, muda o estado name
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        valeu={email}
                        onChange={ e => setEmail(e.target.value) }//Isso é uma Arrow Function!!

                    />
                    <input
                        placeholder="Whatsapp" 
                        valeu={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value) }
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            valeu={cidade}
                            onChange={ e => setCidade(e.target.value) }
                        />
                        <input 
                            style={ { width:80 } } 
                            placeholder="UF" 
                            valeu={uf}
                            onChange={ e => setUf(e.target.value) }

                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
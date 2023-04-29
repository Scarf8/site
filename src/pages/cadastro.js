import React, { useState } from 'react';
import Title from './../components/Title/index';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [nomecartao, setNomeCartao] = useState('');
    const [numerocartao, setNumeroCartao] = useState('');

    function handleNomeChange(event) {
        setNome(event.target.value);
    }  
    
    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleNomeCartaoChange(event) {
        setEmail(event.target.value);
    }

    function handleNumeroCartaoChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // enviar dados de cadastro para o servidor aqui
        console.log(`Nome: ${nome}, Telefone: ${telefone}`);
    }

    return (
                <form onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                    <label for="floatingInput">Nome completo
                    
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={nome} onChange={handleNomeChange}></input>
                    </label>
                        </div>
                <div class="form-floating">
                    <label for="floatingPassword">Password
                    
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                    </label>
                        </div>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
    );
}
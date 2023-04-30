import React, { useState } from 'react';
import Title from './../components/Title/index';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomecartao, setNomeCartao] = useState('');
    const [numcartao, setNumCartao] = useState('');
    const [cvc, setCvc] = useState('');

    function handleNomeChange(event) {
        setNome(event.target.value);
    }  
    
    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleEnderecoChange(event) {
        setEndereco(event.target.value);
    }

    function handleNomeCartaoChange(event) {
        setNomeCartao(event.target.value);
    }

    function handleNumCartaoChange(event) {
        setNumCartao(event.target.value);
    }

    function handleCvcChange(event) {
        setCvc(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // enviar dados de cadastro para o servidor aqui
        console.log(`Nome: ${nome}, Telefone: ${telefone}, Endereço: ${endereco}, Nome do Cartão: ${nomecartao}, Número do Cartão: ${numcartao}, CVC: ${cvc}`);
    }

    return (
 
        <><div className="form-custom">
            <Title title={"Cadastro de Assinante"} />
            <form onSubmit={handleSubmit}>
                <h4>Dados pessoais</h4>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={handleNomeChange} />
                </label>
                <br />
                <label>
                    Telefone:
                    <input type="text" value={telefone} onChange={handleTelefoneChange} />
                </label>
                <br />
                <label>
                    Endereço:
                    <input type="text" value={endereco} onChange={handleEnderecoChange} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
        
        <div>
        <form onSubmit={handleSubmit}>
                <h4>Dados do Cartão</h4>
                <label>
                    Nome no Cartão:
                    <input type="text" value={nomecartao} onChange={handleNomeCartaoChange} />
                </label>
                <br />
                <label>
                    Número do Cartão:
                    <input type="text" value={numcartao} onChange={handleNumCartaoChange} />
                </label>
                <br />
                <label>
                    CVC do Cartão:
                    <input type="text" value={cvc} onChange={handleCvcChange} />
                </label>
                <br />

                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                <label class="btn btn-outline-primary" for="btnradio1">Free</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btnradio2">Plus</label>
                <br />

                <button type="submit">Assinar</button>        
                </div>
            </form>


            </div></>

        
    );
}
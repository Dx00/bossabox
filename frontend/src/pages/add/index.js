import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Add(){

    const [tool, setTool] = useState('');
    const [tool_link, setToolLink] = useState('');
    const [description_tool, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const history = useHistory();

    async function handleSubmit(event){

        let data = {
            tool,
            tool_link,
            description_tool,
            tag
        }

        try {
            api.post('/add', data)
            .then((response) => {
                alert('Cadastrado com sucesso')
            });
        } catch (error) {
            alert(error);
        }
    }


    return(
        <section className="add">
            <form onSubmit={handleSubmit} >
                
                <h1>+ Add New Tool</h1>

                <label>
                    <strong><p>Tool Name</p></strong>
                    <input type="text" onChange={(e) => setTool(e.target.value) } value={tool} placeholder="Tool name" />
                </label>

                <label>
                    <strong><p>Tool Link</p></strong>
                    <input type="text" onChange={(e) => setToolLink(e.target.value)} placeholder="Tool link" />
                </label>

                <label>
                    <strong><p>Tool Description</p></strong>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Tool description" />
                </label>

                <label>
                    <strong><p>Tag</p></strong>
                    <input type="text" onChange={(e) => setTag(e.target.value)} placeholder="Tool Tag" />
                </label>

            <div className="botoes">
                <button className="submit" onClick={() => history.push('/')} type="submit">Voltar</button>
                <button className="submit" onClick={handleSubmit} type="submit">Adicionar</button>
            </div>
                
            </form>
        </section>
        
    )
}
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import './styles.css';
import api from '../../services/api';


export default function Home(){

    const [title, setTitle] = useState([]);
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [checkbox, setCheck] = useState(false);

    const history = useHistory();


    if(checkbox == false){
        async function add(){ // busca repositorios
            try {
                api.get(`/repositories`, { 
                    params: {
                        name: name,
                    }
                 })
                .then(response => {
                    if(response !== [] || response == ''){
                        setTitle(response.data);
                    } else {
                        setTitle(['nada']);
                    }
                })
            } catch (error) {
                alert('Houve um erro')
            }
        }
    
        add();


    } else if(checkbox == true){
        async function add(){ // busca repositorios
            try {
                api.get(`/repositories`, { 
                    params: {
                        tag: tag,
                    }
                 })
                .then(response => {
                    if(response !== [] || response == ''){
                        setTitle(response.data);
                    } else {
                        setTitle(['nada']);
                    }
                });
            } catch (error) {
                alert('Houve um erro')
            }
        }
    
        add();

        
    }


    function handleChange(event){
        setName(event.target.value)
        setTag(event.target.value)
    }


    function handleCheck(event){
        if(checkbox == true){
            setCheck(event.target.value = false)
        } else if(checkbox == false){
            setCheck(event.target.value = true)
        }
    }

    function handleClick(){
        history.push('/add');
    }

    return(

    <section>
        <header>
            <h1>VUTTR</h1>
            <p>Very Useful Tools To Remember</p>
            <div>
                <input className="search" type="text" onChange={handleChange} value={name} placeholder="Faça uma busca"/>
                <label>
                    <input type="checkbox" onChange={handleCheck} value={checkbox} />Search in tags only
                </label>
                <button onClick={handleClick} >Adicionar</button>
            </div>
        </header>
        <section id="form">

        </section>
       <section id="form" className="list">

            
            <ul className="description">
                {title.map(itens => (
                     <li key={itens.id}>
                     <div className="remover">
                     <a href={itens.tool_link}>{itens.tool}</a>
                         <button>Remover</button>
                     </div>
                     <p>{itens.description_tool}</p>
                     <strong>Tags: {itens.tag}</strong>
                 </li>
                ))} 
            </ul> 


       </section>
    </section>
    );
}
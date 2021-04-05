import React , {useState}from 'react'

export default function InputForm(props){
    const [valor, setValor] =  useState('inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/>
        </div>
    )
}
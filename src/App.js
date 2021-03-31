import React from 'react';
import './index.css'
import Primeiro from "././components/basicos/Primeiro";
import ComPrametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Card from   './layout/Card'
import './App.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div>
     <div className="App">
      <h1>Fundamentos do React js</h1>
        <div className="Cards">
          <Card titulo="#4 - Compoenente com Filhos" color="#F4D03F">
              <Familia sobrenome="Garcia">
                <FamiliaMembro nome="Pedro"/>
                <FamiliaMembro nome="Ana"/>
                <FamiliaMembro nome="Julia"/>
                <FamiliaMembro nome="Amanda"/>
              </Familia>
          </Card>
          <Card titulo="#3 - Desafio  Aleatório" color="#0BCEBE">
           <Aleatorio  min={1} max={60}/>
          </Card>
          <Card titulo="#2 - Componente com Parametro" color="#00BFFF">
            <ComPrametro titulo="Apredendo" subtitulo="Deu certo!"/>
          </Card>
          <Card titulo="#1 - Primeiro Componente" color="#FF1493">
            <Primeiro/>
          </Card>
        </div> 
        </div>    
    </div>
    
);
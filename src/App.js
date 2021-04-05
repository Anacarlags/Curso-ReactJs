import React from 'react';
import './index.css'

import Primeiro from "././components/basicos/Primeiro";
import ComPrametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProduto from "./components/repeticao/TabelaProduto"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UserInfo from "./components/condicional/userInfo"
import Card from   './layout/Card'
import InputForm from "./Formulario/InputForm"
import './App.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div>
     <div className="App">
      <h1>Fundamentos do React js</h1>
        <div className="Cards">
        <Card titulo="#8 - Componente Controlado" color="#D2691E" >
            <InputForm></InputForm>
          </Card>
         <Card titulo="#7 - Condicional" color="#2F4F4F" >
            <ParOuImpar numero="15"></ParOuImpar>
            <UserInfo  usuario={{nome: 'Ana'}}/>
          </Card>

         <Card titulo="#6 - Repetição" color="#1E90FF"> 
            <TabelaProduto></TabelaProduto>
          </Card>
          <Card titulo="#5 - Repetição" color="#836FFF"> 
            <ListaAlunos></ListaAlunos>
          </Card>
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
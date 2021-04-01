import React from 'react'
import produtos from  "../../data/produtos";
import "./Tabelaprodutos.css"

export default function ListaAlunos(props){
   
    function getLinhas(){
        return produtos.map((produto, i) => {
            return(
                <tr key={produto.id} className={i % 2 === 0 ? 'Par': ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco}</td>
                </tr>
            )
        })
    }
    return(
        <div className="TabelaProdutos">
            <table> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}
import React from 'react'
import condIf from './condIf'

export default function userInfo(props){
    const usuario = props.usuario || {}
    return(
      <div>
        <condIf teste={usuario && usuario.nome}>
            Seja Bem vinda <strong>{usuario.nome}</strong>!
        </condIf>
      </div>
       
    )
}
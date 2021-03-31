import React from 'react'
import "./Card.css"

export default function Card(props){
  const cardstyle = {
    backgroundColor: props.color 
  }
    return (
        <div className="Card" style={cardstyle}>
        <div className="title">{props.titulo}</div>
        <div className="content">
          {props.children}
        </div>
        
     </div>
    ); 
}
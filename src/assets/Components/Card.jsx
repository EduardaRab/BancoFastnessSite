import React from 'react'
import Texto from './Texto'
import style from '../Styles/card.module.css'

function Card(props) {
  //card que recebe uma imagem e texto
  return (
    <div className={style.container}>
        <img src={props.img} alt="imagem" className={style.imagem}/>
        <strong><Texto txt={props.txt}></Texto></strong>
    </div>
  )
}

export default Card
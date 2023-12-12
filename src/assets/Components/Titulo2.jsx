import React from 'react'
import style from '../Styles/titulo2.module.css'

function Titulo2(props) {
  //formatação do segundo título, que é menor
  return (
    <h2 className={style.texto}>{props.txt}</h2>
  )
}

export default Titulo2
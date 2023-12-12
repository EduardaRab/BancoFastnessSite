import React from 'react'
import style from '../Styles/titulo1.module.css'

function Titulo1(props) {
  //formatação do primeiro título, que é o maior
  return (
    <>
      <h1 className={style.texto}>{props.txt}</h1>
    </>
    
  )
}

export default Titulo1
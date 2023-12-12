import React from 'react'
import style from '../Styles/texto.module.css'

function Texto(props) {
  //formatação do texto normal do site
  return (
    <>
      <p className={style.texto}>{props.txt}</p>
    </>
  )
}

export default Texto
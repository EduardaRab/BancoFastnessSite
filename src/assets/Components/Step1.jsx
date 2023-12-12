import React from 'react'
import Titulo1 from './Titulo1'
import Titulo2 from './Titulo2'
import style from '../Styles/step1.module.css'

function Step1(props) {
  //formatação das linhas das etapas da história do banco
  return (
    <div className={style.container}>
        <div className={style.titulo}>
            <Titulo1 txt={props.titulo}></Titulo1>
        </div>
        <div>
            <Titulo2 txt={props.txt}></Titulo2>
        </div>
    </div>
  )
}

export default Step1
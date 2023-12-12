import React from 'react'
import Titulo1 from './Titulo1'
import Titulo2 from './Titulo2'
import style from '../Styles/step2.module.css'

function Step2(props) {
  //recebe um titulo e um texto com um estilo diferente do Step1.jsx
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

export default Step2
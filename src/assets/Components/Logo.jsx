import React from 'react'
import Img1_21 from '../Images/1_21.png'
import style from '../Styles/logo.module.css'

function Logo() {
  //formatação da logo do projeto
  return (
    <div>
        <img src={Img1_21} alt="Logo" className={style.imagem}/>
    </div>
  )
}

export default Logo
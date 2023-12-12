import React from 'react'
import Img1_20 from '../Images/1_20.png'
import style from '../Styles/botaoImg.module.css'

function BotaoImg(props) {
  //layout do botão com imagem, que recebe como props o texto do botão
  return (
    <button className={style.botao} onClick={props.click}>
        <img src={Img1_20} alt="botão" className={style.imagem}/>
        <p className={style.txt}>{props.txt}</p>
    </button>
  )
}

export default BotaoImg
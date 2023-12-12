import React from 'react'
import Titulo2 from '../Components/Titulo2'
import style from '../Styles/propaganda.module.css'

function Propaganda(props) {
  //layout da propagando do site, que recebe uma imagem e um texto
  return (
    <div className={style.container}>
        <img src={props.img} className={style.imagem}/>
        <Titulo2 txt={props.txt}></Titulo2>
    </div>
  )
}

export default Propaganda
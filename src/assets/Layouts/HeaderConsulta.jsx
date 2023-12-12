import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Components/Logo'
import Img6_2 from '../Images/6.2.png'
import style from '../Styles/HeaderConsulta.module.css'

function HeaderConsulta() {
  //header para a página que exibe o extrato e saldo do cliente
  return (
    <div className={style.container}>
      <Logo></Logo>
      <Link to={'/login'}>
        <img src={Img6_2} alt="Sair" className={style.botao}/>
      </Link>
    </div>
  )
}

export default HeaderConsulta
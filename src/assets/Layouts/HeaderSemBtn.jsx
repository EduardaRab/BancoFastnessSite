import React from 'react'
import Logo from '../Components/Logo'
import style from '../Styles/headerSemBtn.module.css'
import { Link } from 'react-router-dom'

function HeaderSemBtn() {
  //header sem o botão para a página de login
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Logo></Logo>
      </div>
      <div className={style.orientacao}>
          <ul className={style.lista}>
            <li className={style.item}><Link to={`/`} className={style.link}>PÁGINA INICIAL</Link></li>
            <li className={style.item}><Link to={`/sobrenos`} className={style.link}>SOBRE NÓS</Link></li>
            <li className={style.item}><Link to={`/faleconosco`} className={style.link}>FALE CONOSCO</Link></li>
          </ul>
      </div>
    </div>
  )
}

export default HeaderSemBtn
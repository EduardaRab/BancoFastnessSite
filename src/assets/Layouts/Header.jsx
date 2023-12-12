import React from 'react'
import BotaoImg from '../Components/BotaoImg'
import Logo from '../Components/Logo'
import style from '../Styles/header.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Img1_23 from '../Images/1_23.png'
import Img1_24 from '../Images/1_24.png'
import Img1_25 from '../Images/1_25.png'

function Header() {
  //header padrão do site e que mais aparece nas páginas
  let navigate = useNavigate() //instanciando a navegação entre páginas
  
  return (
    <div>
      <div className={style.container}>
        <div>
          <Logo></Logo>
        </div>
        <div className={style.botao}>
          <BotaoImg txt="Acessar" click={() => navigate("/login")}></BotaoImg>
        </div>
      </div>
      <div className={style.barra}>
        <ul className={style.lista}>
          <li className={style.item}><Link to={`/`} className={style.link}><img src={Img1_23} alt="" className={style.imagem}/>PÁGINA INICIAL</Link></li> {/*Redirecionando para a home*/}
          <div className={style.sobreNos}>
            <li className={style.item}><Link to={`/sobrenos`} className={style.link}><img src={Img1_24} alt="" className={style.imagem}/>SOBRE NÓS</Link></li> {/*Redirecionando para a página de história*/}
          </div>
          <li className={style.item}><Link to={`/faleconosco`} className={style.link}><img src={Img1_25} alt="" className={style.imagem}/>FALE CONOSCO</Link></li> {/*Redirecionando para a página de feedback*/}
        </ul>
      </div>
    </div>
  )
}

export default Header
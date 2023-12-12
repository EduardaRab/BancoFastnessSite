import React from 'react'
import Logo from '../Components/Logo'
import Texto from '../Components/Texto'
import Titulo1 from '../Components/Titulo1'
import Titulo2 from '../Components/Titulo2'
import style from '../Styles/footer.module.css'
import Img1_16 from '../Images/1_16.png'
import Img1_17 from '../Images/1_17.png'
import Img1_18 from '../Images/1_18.png'
import Img1_19 from '../Images/1_19.png'

function Footer() {
  //footer do site, com as informações de contato
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <Logo></Logo>
            <div className={style.logomarca}>
              <Titulo1 txt="TUDO O QUE VOCÊ PRECISA"></Titulo1>
            </div>
        </div>

        <div className={style.info}>
          <div className={style.acompanhe}>
            <Titulo2 txt='NOS ACOMPANHE'></Titulo2>
            <div className={style.imagens}>
              <img src={Img1_16} alt="linkedin"/>
              <img src={Img1_17} alt="youtube"/>
              <img src={Img1_18} alt="instagram"/>
              <img src={Img1_19} alt="facebook"/>
            </div>
          </div>

          <div className={style.contatos}>
            <Titulo2 txt='NOSSOS CONTATOS'></Titulo2>
            <Texto txt='Capitais e regiões metropolitanas'></Texto>
            <strong><Texto txt='3001 4187'></Texto></strong>
            <Texto txt='Demais localidades'></Texto>
            <strong><Texto txt='0800 459 4187'></Texto></strong>
          </div>

          <div className={style.ajuda}>
            <Titulo2 txt='PRECISA DE AJUDA?'></Titulo2>
            <Texto txt='Entre em contato através dos nossos telefones e redes sociais.'></Texto>
          </div>
        </div>

        <div className={style.atencao}>
          <Texto txt='Atenção: não ligamos pra você por esses telefones. Também não solicitamos dados pessoais, senha da conta, código de transação por telefone. Estes números são apenas para você fazer ligações para o Fastness.'></Texto>
        </div>

    </div>
  )
}

export default Footer
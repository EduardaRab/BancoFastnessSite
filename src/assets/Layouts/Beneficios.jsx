import React from 'react'
import Card from '../Components/Card'
import Img1_2 from '../Images/1_2.png'
import Img1_3 from '../Images/1_3.png'
import Img1_4 from '../Images/1_4.png'
import Img1_5 from '../Images/1_5.png'
import Titulo1 from '../Components/Titulo1'
import style from '../Styles/beneficios.module.css'

function Beneficios() {
  //seção promocional do site, que apresenta os beneficios do banco
  return (
    <div className={style.container}>
        <div className={style.titulo}>
            <Titulo1 txt='O QUE OFERECEMOS'></Titulo1>
        </div>
        <div className={style.cards}>
            <Card img={Img1_2} txt='Zero anuidade'></Card>
            <Card img={Img1_3} txt='Ajuste seu limite em qualquer lugar'></Card>
            <Card img={Img1_4} txt='Descontos em parceiros'></Card>
            <Card img={Img1_5} txt='Parcelamento em até 24x'></Card>
        </div>
    </div>
  )
}

export default Beneficios
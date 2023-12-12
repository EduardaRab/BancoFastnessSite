import React from 'react'
import Card from '../Components/Card'
import Img1_8 from '../Images/1_8.png'
import Img1_9 from '../Images/1_9.png'
import Img1_10 from '../Images/1_10.png'
import Img1_11 from '../Images/1_11.png'
import Img1_12 from '../Images/1_12.png'
import Img1_13 from '../Images/1_13.png'
import style from '../Styles/servicos.module.css'

function Servicos() {
  //layout que exibe os serviços presentes no banco
  return (
    <div className={style.container}>
        <div className={style.card1}>
            <Card img={Img1_8} txt='Autenticação'></Card>
            <Card img={Img1_9} txt='Empréstimo pessoal'></Card>
            <Card img={Img1_10} txt='Pagamentos'></Card>
        </div>
        <div className={style.card2}>
            <Card img={Img1_11} txt='Pix'></Card>
            <Card img={Img1_12} txt='Recarga telefônica'></Card>
            <Card img={Img1_13} txt='Transferência'></Card>
        </div>
    </div>
  )
}

export default Servicos
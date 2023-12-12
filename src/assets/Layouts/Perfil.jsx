import React from 'react'
import Img6_4 from '../Images/6_4.jpg'
import Img6_3 from '../Images/6.3.png'
import Titulo1 from '../Components/Titulo1'
import Titulo2 from '../Components/Titulo2'
import style from '../Styles/perfil.module.css'

function Perfil(props) {
    //layout do perfil do usuário na sua página de consulta de saldo e extrato
    
    return (
    <div className={style.container}>
        <div className={style.imagem}>
            <img src={props.imagem} alt="foto de perfil" className={style.formato}/> {/*Imagem do usuário*/}
        </div>
        <div>
            <Titulo2 txt={props.nome}></Titulo2> {/*Nome do usuário*/}
        </div>
        <div className={style.saldo}>
            <div className={style.comando}>
                <Titulo2 txt='Confira seu saldo'></Titulo2>
            </div>
            <div className={style.dinheiro}>
                <Titulo1 txt='R$'></Titulo1>
                <Titulo1 txt={props.saldo}></Titulo1> {/*Campo do saldo*/}
            </div>
        </div>
    </div>
    )
}

export default Perfil
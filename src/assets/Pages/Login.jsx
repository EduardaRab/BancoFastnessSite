import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderSemBtn from '../Layouts/HeaderSemBtn'
import Footer from '../Layouts/Footer'
import style from '../Styles/login.module.css'
import Texto from '../Components/Texto'
import Titulo1 from '../Components/Titulo1'
import Titulo2 from '../Components/Titulo2'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
  //página para o usuário fazer login puxando os dados da api

  //pegando os dados de login do usuário
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  let navigate = useNavigate() //instanciando a navegação entre páginas

  const logar = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/api_login/', {
        email: email,
        senha: senha
      });
      console.log(response);
      navigate(`/consulta/${response.data.id}/`)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <HeaderSemBtn></HeaderSemBtn>

      <div className={style.titulo}>
            <Titulo1 txt='LOGIN'></Titulo1>
      </div>

      <div className={style.formulario}>
        <form onSubmit={logar} className={style.form}> {/*função de acesso do usuário*/}
          <div className={style.instrucao}>
            <Titulo2 txt='PREENCHA AS INFORMAÇÕES ABAIXO PARA ACESSAR SUA CONTA:'></Titulo2>
          </div>
          <div className={style.container}>
            <div className={style.labels}>
              <label>Usuário</label>
            </div>
            <input type="email" className={style.inputs} onChange={(e) => {setEmail(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}

            <div className={style.labels}>
              <label>Senha</label>
            </div>
            <input type="password" name="senha" id="idSenha" className={style.inputs} onChange={(e) => {setSenha(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}
            <div className={style.btn}>
              <input type="submit" value="Continuar" className={style.submit}/>
            </div>
            <div className={style.textos}>
              <Texto txt='Ainda não possui uma conta?'></Texto>
              <Link className={style.cadastro} to={`/cadastro`}>Clique aqui para se cadastrar</Link>
            </div>
          </div>
        </form>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default Login

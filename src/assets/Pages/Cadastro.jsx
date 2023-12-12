import React, { useState } from 'react'
import axios from 'axios';
import Header from '../Layouts/Header'
import Titulo1 from '../Components/Titulo1'
import Titulo2 from '../Components/Titulo2'
import Footer from '../Layouts/Footer'
import style from '../Styles/cadastro.module.css'
import { Link } from 'react-router-dom'
import Consulta from './Consulta';

function Cadastro() {
  //página em que o usuário se cadastra e as informações são enviadas para a api

  //declarando a variáveis de cadastro do cliente
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataNascimento, setDataNascimento] = useState()
  const [cpf, setCpf] = useState('')
  const [rg, setRg] = useState('')
  const [imagem, setImagem] = useState(null)
  const [senha, setSenha] = useState('')

  const escolherImagem = (e) => {
    setImagem(e.target.files[0])
  }

  const cadastrar = (e) => {
    e.preventDefault();

    console.log('Nome:', nome)
    console.log("Imagem", imagem)
    console.log("Data de nascimento", dataNascimento)

    const formData = new FormData()
    formData.append('nome', nome)
    formData.append('email', email)
    formData.append('telefone', telefone)
    formData.append('data_nascimento', dataNascimento)
    formData.append('cpf', cpf)
    formData.append('rg', rg)
    formData.append('imagem', imagem)
    formData.append('senha', senha)

    axios.post('http://127.0.0.1:8000/api/api_cliente/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(function (resposta) {
      console.log(resposta);
      alert("Usuário cadastrado!")
    })
    .catch(function (erro) {
      console.error(erro);
    });
  }

  return (
    <div>
        <Header></Header>
        <div className={style.titulo}>
            <Titulo1 txt='CADASTRO'></Titulo1>
        </div>

        <form onSubmit={cadastrar} className={style.form}>
          <div className={style.instrucao}>
            <Titulo2 txt='PREENCHA AS INFORMAÇÕES ABAIXO PARA SE CADASTRAR:'></Titulo2>
          </div>
          <div className={style.colunas}>
            <div className={style.info}>
              <label className={style.label}>Nome completo</label>
              <input type="text" onChange={(e) => {setNome(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}
            </div>
            <div className={style.info}>
              <label className={style.label}>Telefone</label>
              <input type="text" onChange={(e) => {setTelefone(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}
            </div>
            <div className={style.info}>
              <label className={style.label}>E-mail</label>
              <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}
            </div>
            <div className={style.info}>
              <label className={style.label}>CPF</label>
              <input type="text" onChange={(e) => {setCpf(e.target.value)}} placeholder='Apenas números'/> {/*recebendo as informações digitadas pelo usuário*/}
            </div>
            <div className={style.info}>
              <label className={style.label}>RG</label>
              <input type="text" onChange={(e) => {setRg(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}
            </div>
            <div className={style.info}>
              <label className={style.label}>Data de nascimento</label>
              <input type="date" name="nascimento" id="nascimento" onChange={(e) => {setDataNascimento(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}
            </div>
            <div className={style.info}>
              <label className={style.label}>Senha numérica</label>
              <input type="password" name="senha" id="senha" onChange={(e) => {setSenha(e.target.value)}} placeholder='Digite apenas números'/> {/*recebendo as informações digitadas pelo usuário*/}
            </div>
            <div className={style.info}>
              <label className={style.label}>Carregar imagem de perfil</label>
              <input type="file" name="foto" id="foto" onChange={escolherImagem}/> {/*recebendo as informações digitadas pelo usuário*/}
            </div>
          </div>
          <div className={style.btn}>
            <input type="submit" value="Continuar" className={style.submit}/>
          </div>
        </form>

        <Footer></Footer>  
    </div>
  )
}

export default Cadastro
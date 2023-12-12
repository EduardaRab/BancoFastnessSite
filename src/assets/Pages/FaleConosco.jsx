import React, { useState } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import style from '../Styles/faleConosco.module.css'
import Titulo2 from '../Components/Titulo2'
import Titulo1 from '../Components/Titulo1'
import emailjs from '@emailjs/browser' //baixar e importar a biblioteca

function FaleConosco() {
    //página para que o usuário entre em contato com a empresa

    //variaveis que armazenam as informações do formulario
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [observacao, setObservacao] = useState('')
    
    const templateParams = { //template das informações que vão compor o email
        from_name: "Equipe do Fastness", //quem eviou o email
        to_name: nome, //nome do cliente
        reply_to: email, //email do cliente
        message: observacao //observacao que o cliente digitou no site
    }

    function salvar(e){ //recebendo o evento 
        e.preventDefault(); // impede o envio padrão do formulário

        if (nome && email && telefone && observacao){ //se todos os campos forem preenchidos
            emailjs.send('service_f1s9qr7', 'template_u7vjgxw', templateParams, 'NttanvBrDMFJuu9TA') //passando os parâmetros de envio do email
                .then((response) => { //se a resposta for sucessida
                    console.log('Email enviado', response.status, response.text) //exibe o status da resposta
                    setNome('') //limpa os campos
                    setEmail('')
                    setTelefone('')
                    setObservacao('')
                })
                .catch((erro) => { //caso dê erro
                    console.log("Erro: ", erro) //exibe o erro no console
                })
            alert("Informações do formulário salvas. Um e-mail de confirmação foi enviado para você.") //avisando o cliente que o formulário foi recebido
        }
        else{ //se estiver faltando algum campo
            alert("Preencha todos os campos!") //o formulário não é enviado
        }
    }

    return (
        <div>
            <Header></Header> 

            <div className={style.titulo}>
                <Titulo1 txt='FALE CONOSCO'></Titulo1>
            </div>

            <div className={style.container}>
                <form className={style.form} onSubmit={salvar}> {/*Executa a função de salvar o formulário e enviar um email com as informações*/}
                    <div className={style.instrucao}>
                        <Titulo2 txt='PREENCHA AS INFORMAÇÕES ABAIXO:'></Titulo2>
                    </div>

                    <div className={style.labels}>
                        <label className={style.label}>Nome completo</label>
                    </div>
                    <input type="text" placeholder='Digite o nome sem abreviações' onChange={(e) => {setNome(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}

                    <div className={style.labels}>
                        <label className={style.label}>Telefone</label>
                    </div>
                    <input type='text' placeholder='Digite somente números' onChange={(e) => {setTelefone(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}
                    
                    <div className={style.labels}>
                        <label className={style.label}>E-mail</label>
                    </div>
                    <input type="email" placeholder='Digite um e-mail válido' onChange={(e) => {setEmail(e.target.value)}}/> {/*recebendo as informações digitadas pelo usuário*/}
                    
                    <div className={style.labels}>
                        <label className={style.label}>Escreva sua experiência utilizando o Fastness</label>
                    </div>
                    <textarea name="experiencia" id="experiencia" cols="30" rows="10" onChange={(e) => {setObservacao(e.target.value)}}></textarea> {/*recebendo as informações digitadas pelo usuário*/}
                    <div className={style.btn}>
                        <input type="submit" value="Enviar" className={style.submit}/>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
  )
}

export default FaleConosco
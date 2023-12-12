import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { format } from 'date-fns';
import HeaderConsulta from '../Layouts/HeaderConsulta'
import Titulo1 from '../Components/Titulo1'
import Perfil from '../Layouts/Perfil'
import style from '../Styles/consulta.module.css'
import padrao from '../Images/perfil.png'

function Consulta() {
  //página que o usuário consulta o saldo e o extrato, puxando os dados da api
  const {clienteId} = useParams() //recebendo o id do cliente através da url
  
  const [info, setInfo] = useState({}) // {} só tem um registro
  const [movimentacoes, setMovimentacoes] = useState([]) // [] muitos registros
  const [foto, setFoto] = useState()

  useEffect(() => {
    const buscarInformacao = async() => {
      try {
        const resposta = await axios.get(`http://127.0.0.1:8000/api_clienteid/${clienteId}/`);
        setInfo(resposta.data)
      } 
      catch (erro) {
        console.error("Erro ao buscar dados na API", erro);
      }
    };

    const buscarImagem = async() => {
      try{
        const resposta = await axios.get(`http://127.0.0.1:8000/api/api_cliente/${clienteId}/image_blob/`, {
          responseType: 'blob', // Indica que a resposta é um blob
        });
        console.log(resposta)
        const blobUrl = URL.createObjectURL(new Blob([resposta.data]));
        setFoto(blobUrl);
      }
      catch(erro){
        console.error("Erro ao obter a imagem:", erro)
      }
    }

    const buscarMovimentacoes = async() => {
      try{
        const resposta = await axios.get(`http://127.0.0.1:8000/api/api_movimentacao/${clienteId}/`)
        setMovimentacoes(resposta.data)
      }
      catch (erro){
        console.error("Erro ao buscar dados na API", erro)
      }
    }
    //Chama as funções após a montagem do componente
    buscarInformacao() 
    buscarMovimentacoes()
    buscarImagem()
  }, [clienteId]);

  return (
    <div>
      <HeaderConsulta></HeaderConsulta>
      <div className={style.conteudo}>
        <div className={style.titulo}>
          <Titulo1 txt='VISUALIZE SUAS INFORMAÇÕES'></Titulo1>
        </div>
        <div className={style.perfil}>
          {foto && 
            <Perfil saldo={info.saldo} nome={info.nome} imagem={foto}></Perfil>
          }
        </div>
        <div className={style.titulo}>
          <Titulo1 txt='VISUALIZE SEU EXTRATO'></Titulo1>
        </div>

        <div className={style.tabela}>
          <table>
            <thead> {/*Cabeçalho da tabela, que vai exibir o extrato do usuário*/}
              <tr>
                <th>Data</th>
                <th>Valor</th>
                <th>Histórico</th>
              </tr>
            </thead>
            <tbody>
              {movimentacoes.map(movimentacao => (
                <tr>
                  <td>{format(new Date(movimentacao.data_movimentacao), 'dd/MM/yyyy')}</td>
                  <td>R$ {movimentacao.valor}</td>
                  <td>{movimentacao.historico}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>    
      </div>
      <footer className={style.footer}></footer>
    </div>
  )
}

export default Consulta
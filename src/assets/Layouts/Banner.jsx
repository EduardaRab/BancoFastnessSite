import React from 'react'
import styled from 'styled-components'

//criando um estilo para o container que vai receber a imagem
const Container = styled.div`
  padding: 3%;
`

//criando um estilo para a imagem
const Imagem = styled.img`
  width: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`

function Banner(props) {
  //formatação para adicionar banners nas páginas
  return (
    <Container>
      <Imagem src={props.img} alt="Imagem promocional"></Imagem>
    </Container>
  )
}

export default Banner
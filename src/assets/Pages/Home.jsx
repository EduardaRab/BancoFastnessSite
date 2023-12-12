import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Banner from '../Layouts/Banner'
import Beneficios from '../Layouts/Beneficios'
import Propaganda from '../Layouts/Propaganda'
import Servicos from '../Layouts/Servicos'
import Img1_1 from '../Images/1_1.png'
import Img1_15 from '../Images/1_15.png'
import Img1_14 from '../Images/1_14.png'
import Img1_22 from '../Images/1_22.png'

function Home() {
  //página incial, que promove o banco
  return (
    <div>
      <Header></Header>
      <Banner img={Img1_1}></Banner>
      <Beneficios></Beneficios>
      <Propaganda img={Img1_22} txt='No débito ou no crédito, você e um acompanhante ganham 50% de desconto nos cinemas Kinoplex'></Propaganda>
      <Servicos></Servicos>
      <Propaganda img={Img1_14} txt='O Fastness é digital e personalizado, você pode deixar seu perfil com a sua cara'></Propaganda>
      <Banner img={Img1_15}></Banner>
      <Footer></Footer>
    </div>
  )
}

export default Home
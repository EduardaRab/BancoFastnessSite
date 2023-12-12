import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Banner from '../Layouts/Banner'
import Historia from '../Layouts/Historia'
import Img2_1 from '../Images/2_1.png'
import Img2_2 from '../Images/2_2.png'

function SobreNos() {
  //página que conta a história da empresa
  return (
    <div>
        <Header></Header>
        <Banner img={Img2_1}></Banner>
        <Historia></Historia>
        <Banner img={Img2_2}></Banner>
        <Footer></Footer>
    </div>
  )
}

export default SobreNos
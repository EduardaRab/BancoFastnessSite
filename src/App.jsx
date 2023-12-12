import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./assets/Pages/Home"
import SobreNos from "./assets/Pages/SobreNos"
import FaleConosco from "./assets/Pages/FaleConosco"
import Login from "./assets/Pages/Login"
import Cadastro from "./assets/Pages/Cadastro"
import Consulta from "./assets/Pages/Consulta"

function App() {

  return (
    <>
      <BrowserRouter> {/*Criando as rotas do projeto*/}
        <Routes>
          <Route path="/" element={<Home/>}></Route> {/*Rota para acessar a home*/}
          <Route path="/sobrenos" element={<SobreNos/>}></Route> {/*Rota para acessar a história do banco*/}
          <Route path="/faleconosco" element={<FaleConosco/>}></Route> {/*Rota para acessar a parte de feedback do cliente*/}
          <Route path="/login" element={<Login/>}></Route> {/*Rota para acessar o login*/}
          <Route path="/cadastro" element={<Cadastro/>}></Route> {/*Rota para acessar o cadastro*/}
          <Route path="/consulta/:clienteId" element={<Consulta/>}></Route> {/*Rota para acessar a consulta do saldo e extrato*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

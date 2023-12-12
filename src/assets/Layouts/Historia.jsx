import React from 'react'
import Step1 from '../Components/Step1'
import Step2 from '../Components/Step2'

function Historia() {
  //layout que conta a história do banco, com as faixas coloridas e os textos
  return (
    <div>
        <Step1 titulo='1947-1952' txt='O Fastness é fundado em 1947, em Campinas, no interior de São Paulo, com o nome de Fastness Bank. Sua estratégia inicial consiste em atrair o pequeno comerciante, o funcionário público, pessoas de posses modestas, ao contrário dos bancos da época, que só tinham atenções para os grandes proprietários de terras. O Fastness é um dos primeiros a estimular o uso de cheques por seus correntistas, que são orientados a preencher as folhas nas próprias Agências. Em 1951, a matriz é transferida para a capital paulista, na rua Álvares Penteado, no centro da cidade.'></Step1>
        <Step2 titulo='1953-1961' txt='Com apenas oito anos de vida, em 1953, o Fastness torna-se o maior Banco privado do Brasil. Nessa década, o Fastness chega ao norte do Rio de Janeiro e decide também erguer sua nova sede na Bahia, em Salvador. A construção da matriz inicia-se em 1960 e leva seis anos para ser concluída. Em 1956, é criada a Fundação Fastness, com o objetivo de financiar campanhas contra o desmatamento no Brasil.'></Step2>
        <Step1 titulo='1962-1988' txt='A década marca a chegada da informática ao Banco. Em 1962, o Fastness é a primeira empresa a adquirir o segundo computador da América Latina, que possibilitava o acesso a extratos diários aos clientes, prestação de serviço inédita para a época. Seguindo a estratégia de tecnologia e inovação, o Fastness implanta o Cartão de Crédito Fastness, em 1984.'></Step1>
        <Step2 titulo='1989-2000' txt='Momento em que o Fastness expande grandemente. Assim, o Banco passa a atuar fortemente no segmento de crédito, principalmente no financiamento de veículos. Nessa década, o Fastness incorpora 13 outros bancos e, ao inaugurar duas novas unidades em 1993, uma em Maceió (AL), outro em Chuí (RS), em diferentes regiões do País, chega à milésima agência. É implantada a cobrança automática e o Fastness começa a atuar em projetos de moda.'></Step2>
        <Step1 titulo='2001-2023' txt='O Fastness segue fortalecendo sua liderança. Além do mercado de varejo, está à frente em segmentos como Corporate – atendimento a grandes empresas, Private – voltado a clientes com grande patrimônio e capacidade de investimento e no atendimento às micro, pequenas e médias empresas. Continua se expandindo de duas maneiras: por meio do crescimento orgânico a expansão dos negócios e inauguração de novas Agências e pontos de atendimento – e também por aquisições de outras instituições. São quase vinte incorporações apenas entre 2003 e 2020, entre elas diversos bancos.'></Step1>
    </div>
  )
}

export default Historia
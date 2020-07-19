import React from 'react';
// import { Container } from './styles';
import Banner from '../../components/banner';
import Advertisement from '../../components/advertisement';
import Questions from "../../components/questions";
import Footer from '../../components/footer';

function Main() {
  const firstList = ['Perguntas Frequentes', 'Relações com investidores', 'Formas de assistir', 'Informações corporativas', 'Originais Netflix'];

  const secondList = ['Centro de ajuda', 'Carreiras', 'Termos de uso', 'Entre em contato'];

  const thirdList = ['Conta', 'Resgatar cartão pré-pago', 'Privacidade', 'Teste de velocidade'];

  const fourthList =['Imprensa', 'Comprar cartão pré-pago', 'Preferências de cookies', 'Avisos legais'];

  return(
    <>
      <Banner />
      <Advertisement />      
      <Questions />
      <Footer firstList={firstList}  secondList={secondList} thirdList={thirdList} fourthList={fourthList}/>
    </>
  );
}

export default Main;
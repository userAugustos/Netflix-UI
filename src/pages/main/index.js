import React from 'react';
// import { Container } from './styles';
import Header from '../../components/header';
import Advertisement from '../../components/advertisement';
import Questions from "../../components/questions";
import Footer from '../../components/footer';

function Main() {
  return(
    <>
      <Header />
      <Advertisement />      
      <Questions />
      <Footer />
    </>
  );
}

export default Main;
import React from 'react';

import Header from '../../components/header';
import FormLogin from '../../components/forms/login';
import Footer from '../../components/footer';

import { Container } from './styles';

function Login() {

  const  firstList = ['Termos dos Cartões pré-pagos'];

  const secondList = ['Termos de uso'];

  const thirdList = ['Declaração de privacidade'];

  return (
    <Container>
      <Header />
      <FormLogin />
      <Footer firstList={firstList} secondList={secondList} thirdList={thirdList}/>
    </Container>
  );
}

export default Login;

import React, { useState } from 'react';

import { Container, Form, InputGroup, LoginOther } from './styles';
import FacebookLogo from '../../../images/FB-f-Logo.png';


function LoginForm() {

  const [collapse, setCollapse] = useState(false);

  return (
    <Container>
      <h1>Entrar</h1>
      <Form method="POST">
        <InputGroup>
          <input type='email' name='email' required />
          <label htmlFor="email">Email</label>
        </InputGroup>
        <InputGroup>
          <input type='password' name='password' required />
          <label htmlFor="password">Senha</label>
        </InputGroup>

        <button>Entrar</button>
        <div id="checkbox">
          <div>
          <input type='checkbox' name='remember'/>
          <label htmlFor="remember">lembre-se de mim</label>
          </div>
          <a href='/'>Precisa de ajuda?</a>
        </div>
      </Form>
      <LoginOther>
        <a href="/login"> <img src={FacebookLogo} alt=""/> Concectar com o Facebook</a>
        <p>Novo por aqui?<a href="/register">Assine Agora</a></p>
        <span>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. 
          <button onClick={()=> setCollapse(!collapse)}>Saiba mais</button> 
        </span>
        {collapse && <p>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à Política de Privacidade e Termos de Uso, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p> }
      </LoginOther>
    </Container>
  );
}

export default LoginForm;

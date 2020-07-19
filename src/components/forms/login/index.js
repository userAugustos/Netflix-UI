import React from 'react';

import { Container, Form, InputGroup } from './styles';

function LoginForm() {
  return (
    <Container>
      <h2>Entrar</h2>
      <Form>
        <InputGroup>
          <label htmlFor="email">Email</label>
          <input type='email' name='email' required />
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">Senha</label>
          <input type='password' name='password' required />
        </InputGroup>

        <button>Entrar</button>
        <div>
          <div>
          <input type='checkbox' name='remember'/>
          <label htmlFor="remember">lembre-se de mim</label>
          </div>
          <a href='/'>Precisa de ajuda?</a>
        </div>
      </Form>
    </Container>
  );
}

export default LoginForm;

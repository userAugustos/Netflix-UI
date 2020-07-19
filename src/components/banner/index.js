import React from 'react';

import { useHistory } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next';

import Header from '../header/';

import { Container, Content, LargeEmailInput } from './styles';

function Banner() {
  const history = useHistory();

  return(
    <Container>
      <Header hasButton/>
      <Content>
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <LargeEmailInput>
          <input type="email" name="email" id="email" required /> 
          <label htmlFor="email">Email</label>
          <button type="button" onClick={() => history.push('/login')}>
            VAMOS LÁ <Icon  icon={ic_navigate_next} size="32px"/> 
          </button> 
        </LargeEmailInput>
        <strong>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</strong>
      </Content>
    </Container>
  );
}

export default Banner;

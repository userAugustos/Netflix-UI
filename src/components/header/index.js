import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'

import Logo from '../../svg/logo.svg';

import { Container, HeaderTop, Content } from './styles';

function Header() {
  const history = useHistory();

  function redirect() {
    history.push('/login')
  }
  return(
    <Container>
      <HeaderTop>
        <img src={Logo} alt="logo"/>
        <NavLink to="/" className="sign-ing">
          Entrar
        </NavLink>
      </HeaderTop>
      <Content>
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <div>
          <input type="email" name="email" id="email" required /> 
          <label htmlFor="email">Email</label>
          <button type="button" onClick={redirect}>
            VAMOS LÁ <Icon  icon={ic_navigate_next} size="32px"/> 
          </button> 
        </div>
        <strong>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</strong>
      </Content>
    </Container>
  );
}

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'

import Logo from '../../svg/logo.svg';

import { Container, HeaderTop, Content } from './style';

function Header() {
  return(
    <Container>
      <HeaderTop>
        <img src={Logo} alt="logo"/>
        <NavLink to="/" className="sign-ing">
          Entrar
        </NavLink>
      </HeaderTop>
      <Content>
        <h1>Diversão total ou reembolso integral.</h1>
        <h2>Sua diversão está garantida. Se você não adorar a Netflix, cancele nos primeiros 7 dias para receber o reembolso.</h2>
        <div>
          <input type="text" name="email" id="email" placeholder="Email"/> 
          <button type="button">VAMOS LÁ <Icon  icon={ic_navigate_next} size="32px"/> </button> 
        </div>
        <strong>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</strong>
      </Content>
    </Container>
  );
}

export default Header;

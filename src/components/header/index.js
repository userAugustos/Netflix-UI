import React from 'react';

import { NavLink } from 'react-router-dom';

import { HeaderTop } from './styles';

import Logo from '../../svg/logo.svg';

function Header(props) {
  return(
    <HeaderTop>
    <img src={Logo} alt="logo"/>

    {props.hasButton && <NavLink to="/login" className="sign-ing"> Entrar </NavLink>}
  </HeaderTop>
  );
}

export default Header;
import React from 'react';

import { Icon } from "react-icons-kit";
import {world} from 'react-icons-kit/typicons/world';


import { Container, Language, Lists, WithLove } from './styles';

function Footer(props) {

  return(
    <Container id="footer">
      <div>
        <h2> Dúvidas? Ligue 0800-761-4631 </h2>
      </div>
      <Lists>
        <ul>
          {props.firstList && props.firstList.map((text, index) => (
            <li key={index} >
              <a href="#footer">{text}</a>
            </li>
          ))}
        </ul>
        <ul>
        {props.secondList && props.secondList.map((text, index) => (
            <li key={index}>
              <a href="#footer">{text}</a>
            </li>
          ))}
        </ul>
        <ul>
        {props.thirdList && props.thirdList.map((text, index) => (
            <li key={index}>
              <a href="#footer">{text}</a>
            </li>
          ))}
        </ul>
        <ul>
        {props.fourthList && props.fourthList.map((text, index) => (
            <li key={index}>
              <a href="#footer">{text}</a>
            </li>
          ))}
        </ul>
      </Lists>
      <Language>
        <Icon icon={world} size="26px"/>
        <select name="language" id="language">
          <option value="portugues">portugues</option>
          <option value="ingles">ingles</option>
        </select>
      </Language>
      <WithLove>
        <p>Feito com Amor por <span>Felipe Augustos</span> :)</p>  
      </WithLove>
    </Container>
  );
}

export default Footer;
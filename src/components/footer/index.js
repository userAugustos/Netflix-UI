import React from 'react';

import { Icon } from "react-icons-kit";
import {world} from 'react-icons-kit/typicons/world';


import { Container, Language, Lists, WithLove } from './styles';

function Footer() {

  function RenderList(props){
    return(
      <li>
        <a href={props.src}>{props.text}</a>
      </li>
    );
  }
  return(
    <Container>
      <div>
        <h2> Dúvidas? Ligue 0800-761-4631 </h2>
      </div>
      <Lists>
        <ul>
          <RenderList src="/" text="Perguntas frequentes"/>
          <RenderList src="/" text="Relações com investidores"/>
          <RenderList src="/" text="Formas de assistir"/>
          <RenderList src="/" text="Informações corporativas"/>
          <RenderList src="/" text="Originais Netflix" />
        </ul>
        <ul>
          <RenderList src="/" text="Centro de ajuda"/>
          <RenderList src="/" text="Carreiras" />
          <RenderList src="/" text="Termos de uso"/>
          <RenderList src="/" text="Entre em contato"/>
        </ul>
        <ul>
          <RenderList src="/" text="Conta"/>
          <RenderList src="/" text="Resgatar cartão pré-pago"/>
          <RenderList src="/" text="Privacidade" />
          <RenderList src="/" text="Teste de velocidade" />
        </ul>
        <ul>
          <RenderList src="/" text="Imprensa" />
          <RenderList src="/" text="Comprar cartão pré-pago" />
          <RenderList src="/" text="Preferências de cookies" />
          <RenderList src="/" text="Avisos legais" />
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
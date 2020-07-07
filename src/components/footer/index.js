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
    <Container id="footer">
      <div>
        <h2> Dúvidas? Ligue 0800-761-4631 </h2>
      </div>
      <Lists>
        <ul>
          <RenderList src="#footer" text="Perguntas frequentes"/>
          <RenderList src="#footer" text="Relações com investidores"/>
          <RenderList src="#footer" text="Formas de assistir"/>
          <RenderList src="#footer" text="Informações corporativas"/>
          <RenderList src="#footer" text="Originais Netflix" />
        </ul>
        <ul>
          <RenderList src="#footer" text="Centro de ajuda"/>
          <RenderList src="#footer" text="Carreiras" />
          <RenderList src="#footer" text="Termos de uso"/>
          <RenderList src="#footer" text="Entre em contato"/>
        </ul>
        <ul>
          <RenderList src="#footer" text="Conta"/>
          <RenderList src="#footer" text="Resgatar cartão pré-pago"/>
          <RenderList src="#footer" text="Privacidade" />
          <RenderList src="#footer" text="Teste de velocidade" />
        </ul>
        <ul>
          <RenderList src="#footer" text="Imprensa" />
          <RenderList src="#footer" text="Comprar cartão pré-pago" />
          <RenderList src="#footer" text="Preferências de cookies" />
          <RenderList src="#footer" text="Avisos legais" />
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
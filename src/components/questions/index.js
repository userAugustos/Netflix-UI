import React from 'react';

import { useHistory } from 'react-router-dom';

import Askbar from '../askbar/';

import { Icon } from 'react-icons-kit';
import { ic_navigate_next } from 'react-icons-kit/md/ic_navigate_next';

import { Container } from './styles';
import { LargeEmailInput } from '../header/styles';

function Questions() {
  const history = useHistory();
  return (
    <Container>
      <h1>Perguntas Frequentes</h1>
      <Askbar title='O que é a Netflix?' answer='A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.  Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.' />
      <Askbar title='Quanto custa a Netflix?' answer='Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras.' />
      <Askbar title='Onde posso assistir?' answer='Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.

Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.' />
      <Askbar title='Como faço para cancelar?' answer='A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.' />
      <Askbar title='O que eu posso assistir na Netflix?' answer='A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.' />

      <LargeEmailInput className='questionsInput'>
        <input
          type='email'
          name='email-askbar'
          id='email-askbar'
          required
          placeholder='Email'
        />
        <label htmlFor='email-askbar'>Email</label>
        <button type='button' onClick={() => history.push('/login')}>
          VAMOS LÁ <Icon icon={ic_navigate_next} size='32px' />
        </button>
      </LargeEmailInput>
    </Container>
  );
}

export default Questions;

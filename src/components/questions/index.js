import React, {useState} from "react";

import { useHistory } from 'react-router-dom';

import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next';
import { Icon } from "react-icons-kit";

import {plus} from 'react-icons-kit/entypo/plus';
import {thinDown} from 'react-icons-kit/entypo/thinDown';

import { Container, AskBar, Dropdown, Content } from "./styles";
import { LargeEmailInput } from '../header/styles';

function Questions() {
  const history = useHistory();
  const [dropdown, setDropdown] = useState(false);

  function handleClickButton(id){
    if(id == 1){
      setDropdown(!dropdown)
    }
  }

  function Askbar(props) {
    return (
      <Content>
        <AskBar type="button" onClick={(event) => handleClickButton(event.target.id) } id={props.id}>
          {props.title}
          <Icon icon={dropdown ? thinDown : plus } size="32px"/>
        </AskBar>
        {dropdown && (
        <Dropdown>
          <p>{props.answer}</p>
        </Dropdown>
        )}
      </Content>
    );
  }
  return (
    <Container>
      <h1>Perguntas Frequentes</h1>
      <Askbar title="O que é a Netflix?" answer="resposta" id={1}/>
      <Askbar title="Quanto custa a Netflix?" answer="resposta"/>
      <Askbar title="Onde posso assistir?" answer="resposta" />
      <Askbar title="Como faço para cancelar?" answer="resposta" />
      <Askbar title="O que eu posso assistir na Netflix?"answer="resposta"/>

      <LargeEmailInput>
        <input type="email" name="email-askbar" id="email-askbar" required placeholder="Email"/>
        <label htmlFor="email-askbar">Email</label>
        <button type="button" onClick={() => history.push('/login')}>
          VAMOS LÁ <Icon icon={ic_navigate_next} size="32px" />
        </button>
      </LargeEmailInput>
    </Container>
  );
}

export default Questions;

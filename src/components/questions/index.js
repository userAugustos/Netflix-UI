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
  const [dropdown, setDropdown] = useState(true);

  function handleButtonClick(id){
    setDropdown(!dropdown)
  }

  function Askbar(props) {
    return (
      <Content>
        <AskBar type="button" onClick={(event) => handleButtonClick(event.target.id)} id={props.id}>
          {props.title}
          <Icon icon={dropdown ? plus : thinDown } size="32px"/>
        </AskBar>
        <Dropdown className="isClosed">
          <p>{props.answer}</p>
        </Dropdown>
      </Content>
    );
  }
  return (
    <Container>
      <h1>Perguntas Frequentes</h1>
      <Askbar title="O que é a Netflix? " answer="resposta" id={1}/>
      <Askbar title="Quanto custa a Netflix?" answer="resposta" id={2}/>
      <Askbar title="Onde posso assistir?" answer="resposta" id={3} />
      <Askbar title="Como faço para cancelar?" id={4} />
      <Askbar title="O que eu posso assistir na Netflix?" id={5}/>

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

import React, { useState } from 'react';

import { AskBar, Answer } from './styles';

import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { thinDown } from 'react-icons-kit/entypo/thinDown';

function Askbar(props) {
  const [dropdown, setDropdown] = useState(false);

  function handleClickButton(id) {
    setDropdown(!dropdown);
  }
  return (
    <>
      <AskBar
        type='button'
        onClick={(event) => handleClickButton(event.target.id)}
        id={props.id}
      >
        {props.title}
        <Icon icon={dropdown ? thinDown : plus} size='32px' />
      </AskBar>
      {dropdown && (
        <Answer>
          {props.answer}
        </Answer>
      )}
    </>
  );
}

export default Askbar;

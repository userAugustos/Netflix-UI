import styled from 'styled-components';

export const Container = styled.div`
  padding: 3.5rem;

  background: rgba(0,0,0, .80);

  width: 100%;
  max-width: 450px;
  height: 90vh;
`

export const Form = styled.form`
  margin: 2rem auto;
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

`;

export const InputGroup = styled.div `
  position: relative;
  width: 100%;

  input{
    margin: 10px auto;
    width: 100%;
    padding: .5rem 1rem;

    height: 3.5rem;
    background: var(--darked-grey);
    border: none;
    border-bottom: 2px solid var(--alert);
    border-radius: 4px; 

    outline: none;
    color: var(--font-white);
    font-size: 1.1rem;
  }label{
    font-size: 1.1rem;
    color: var(--main-grey);
    position: absolute;
    top: 40%;
    left: 5%;
  }

`;

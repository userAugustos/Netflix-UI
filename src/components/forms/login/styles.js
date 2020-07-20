import styled from 'styled-components';

export const Container = styled.div`
  padding: 3.5rem;

  background: rgba(0,0,0, .80);

  width: 100%;
  max-width: 450px;
  height: 90vh;

  h1{
    font-size: 2.2rem;
  }
`

export const Form = styled.form`
  margin: 2rem auto;
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  input[type="email"], input[type="password"]{
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
    font-size: 1rem;
  }
  button{
    margin: 2.5rem auto 10px auto;
    background: var(--main-red);
    border: none;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: .8rem 1rem;
    width: 100%;
    border-radius: 4px;
    color: var(--font-white);
  }

  #checkbox{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px 15px;
    font-size: 15px;
    color: rgba(153, 153, 153); /* pushing the main grey, but without blur */

    align-items: center;
  }
`;

export const InputGroup = styled.div `
  position: relative;
  width: 100%;

  label{
    font-size: 1.1em;
    color: var(--main-grey);
    position: absolute;
    top: 40%;
    left: 5%;

    transition: .4s;
  }

  input:focus ~ label,
  input:valid ~ label{
    font-size: .8em;
    top: 20%;
  }
`;

export const LoginOther = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  align-items: flex-start;
  color: #737373;
  font-size: 14px;
  img{
    width: 14px;
  }
  p{
    margin: 10px 0;
    a{
      font-size: 20px;
      margin: 0 5px;
      color: var(--font-white);
    }
  }
  span{
    button{
      border: none;
      background: transparent;
      color: blue;
    }
  }
`;
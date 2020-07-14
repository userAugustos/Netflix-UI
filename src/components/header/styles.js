import styled from 'styled-components';
import Image from '../../images/bg.jpg';

export const Container = styled.section`
  width: 100% !important;
  height: 98vh;

  display: flex;
  flex-direction: column;
  position: relative;

  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url(${Image}) no-repeat center center/cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: inset 4.3rem 1.2rem 11.8rem #000, inset -4.3rem -1.2rem -11.8rem;
  }
`;

export const HeaderTop = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  padding: 2rem 2.5rem;

  .sign-ing {
    right: 0;
    padding: 0.5rem 1.6rem;

    font-weight: 400;
    line-height: normal;
    font-size: 1rem;

    border-radius: 0.2em;

    color: var(--font-white);
    background: var(--main-red);
    transition: background 0.2s ease-in;

    cursor: pointer;

    &:hover {
      background: var(--main-red-serialized);
    }
  }
  img {
    width: 8rem;
    height: 3rem;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  z-index: 1;

  margin-top: 8%;
  justify-self: center;
  align-self: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 760px;

  padding: 2rem 3rem;
  text-align: center;

  h1 {
    font-size: 3.2em;
    font-weight: 600;
    margin: 15px auto;
  }
  h2 {
    font-size: 1.6em;
    font-weight: 500;
  }
`;

export const LargeEmailInput = styled.div`
  margin: 10px auto;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;

  width: 100%;


  input,
  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    border: none;
  }
  input {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;

    border-bottom: 2px solid #ffa00a;
    position: relative;
    width: 70%;
    min-height: 60px;

    padding: 0 0.3rem;

    outline: none;
    font-size: 1rem;
  }
  input ~ label {
    z-index: 1;
    color: #000;
    position: absolute;
    right: 0;
    left: -90%;
    transition: 0.4s;
    @media screen and (max-width: 700px){
      top: 20%;
      left: -55%;
    }
  }
  input:focus ~ label,
  input:valid ~ label {
    color: #000a;
    transform: translateY(-18px);
    font-size: 14px;
    letter-spacing: 0.1em;
  }
  button {
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    min-height: 60px;
    font-size: 1.6rem;
    width: 30%;
    min-width: 180px;
    color: var(--font-white);
    padding: 0 1.5rem;
    background: #f40612;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: 1px solid #404040;
    cursor: pointer;
  }
`;

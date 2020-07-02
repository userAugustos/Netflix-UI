import styled from 'styled-components';
import Image from '../../images/bg.jpg';

export const Container = styled.section`
  width: 100% !important;
  height: 100vh;

  display: flex;
  flex-direction: column;
  position: relative;

  background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0, .7)), url(${Image}) no-repeat center center/cover;

  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, .5);
    box-shadow: inset 4.3rem 1.2rem 11.8rem #000, inset -4.3rem -1.2rem -11.8rem
  }
`;

export const HeaderTop = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  padding: 2rem 2.5rem;

  .sign-ing{
    right: 0;
    padding: .5rem 1.6rem;

    font-weight: 400;
    line-height: normal;
    font-size: 1rem;

    border-radius: .4em;

    color: var(--font-white);
    background: var(--main-red);
    transition: background .2s ease-in;

    cursor: pointer;

    &:hover{
      background: var(--main-red-serialized);
    }
  }
  img{
    width: 10rem;
    height: 3rem;
    cursor: pointer;
  }
`;


export const Content = styled.div`
  z-index: 1;

  margin-top: 8%;
  justify-self: center;
  align-self: center;

  width: 55vw;
  
  padding: 2rem 3rem;
  text-align:center;

  h1{
    font-size: 3.5em;
    margin: 15px auto;
  }
  h2{
    font-size: 1.8em;
    font-weight: 500;
  }
  div{
    margin: 10px auto;
    padding: 0.5rem;
    display: flex;
    align-items: center;

    input, button{
      outline: none;
    }
    input{
      border-top-left-radius: .3rem;
      border-bottom-left-radius: .3rem;

      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 2px solid #ffa00a;
      width: 30rem;
      height: 4rem;

      padding: .5rem;

      outline: none;
    }
    button{
      height: 4rem;
      font-size: 1.6rem;
      color: var(--font-white);
      padding: 0rem 2rem;
      background: #f40612;

      border-style: none;

      cursor: pointer;
    }
  }
`;
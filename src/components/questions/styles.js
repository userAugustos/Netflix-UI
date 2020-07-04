import styled from "styled-components";

export const Container = styled.section`
  margin-top: 1rem;

  width: 100%;
  height: 100%;

  background: var(--main-deep-dark);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 2rem;

  h1{
    font-size: 3rem;
    margin: 20px auto 30px auto;
  }
`;
export const AskBar = styled.button`
  border: none;

  width: 55%;
  height: 12vh;

  background: var(--darked-grey);
  color: var(--font-white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: start;
  font-size: 1.5rem;
  padding: .5rem 1rem;

  margin: 5px auto;
`;

export const Dropdown = styled.div`
  align-items: flex-start;
  padding: 1rem 2rem;
  font-size: 1rem;
  transition: .4s;

  svg{
    transition: .4s;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  .isOpen{
    display: flex;
  }
  .isClosed{
    display: none;
  }
`;
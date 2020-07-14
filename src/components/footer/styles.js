import styled from "styled-components";

export const Container = styled.div`
  color: var(--main-grey);
  margin-top: 1rem;

  width: 100%;
  height: 70vh;

  background: var(--main-deep-dark);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;

  padding: 2rem;

  div{
    margin: 0 auto;
    align-self: flex-start;
  }
  li{
    color: var(--main-grey);
    font-size: .8rem;
    font-weight: 700;
    margin: 10px auto;
  }
`;
export const Language = styled.div`
  width: 10rem;
  height: 3.5rem;

  padding: .5rem;

  display: flex;
  justify-content: space-between; 
  align-items: center;

  border: 1px solid var(--main-grey);
  border-radius: 4px;
  select{
    width: 80%;
    height: 100%;

    background: transparent;

    border: none;

    color: white;
    outline: none;

    font-size: 1rem;
    option{
      background: transparent;
      color: #000;
    }
  }
`;

export const Lists = styled.div`
  width: 90%;
  max-width: 800px;

  justify-self: self-start;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover{
    text-decoration: underline;
  }
`;

export const WithLove = styled.div`
  p{
    color: var(--font-white);
  }
  span{
    color: var(--main-red);
  }
`;
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
  .questionsInput{
    max-width: 700px;
  }
`;
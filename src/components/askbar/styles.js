import styled from 'styled-components';

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
  padding: 0.5rem 1rem;

  margin: 5px auto;
`;

export const Answer = styled.div`
  width: 55%;
  display: flex;
  margin-top: -0.3%;
  padding: 1rem;
  background: var(--darked-grey);

  font-size: 1.5rem;
  letter-spacing: .1rem;
`;

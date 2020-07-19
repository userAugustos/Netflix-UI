import styled from 'styled-components';


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

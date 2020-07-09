import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1rem;

  width: 100%;
  height: 70vh;

  background: var(--main-deep-dark);

  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;

  padding: 2rem 2rem;
`;

export const VideoAd = styled.div`
  position: relative;
  margin-left: 5rem;
  width: 100%;
  height: 100%;

  padding: 1rem;

  img{
    position: relative;
    z-index: 2;
    max-width: 100%;
    max-height: 100%
  }
  video{
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: ${props => props.isDesktop ? '62%' : '70%'};
    max-height: ${props => props.isDesktop ? '45%' : '50%'};

    left: 43.5%;
    top: ${props => props.isDesktop ? '40%' : '48%'};

    transform: translate(-50%,-50%);
  }
`;

export const TextAd = styled.div`
  width: 90%;
  height: 100%;

  margin-left: 5rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start; 
  text-align: start;

  h1{
    font-size: 3.2rem;
  }
  h3{
    font-weight: 500;
    margin-top: 10px;
    font-size: 1.2rem;
    letter-spacing: .3;
  }
`;

export const Card = styled.div`
  z-index: 2;

  position: absolute;
  top: 65%;
  left: 17%;

  width: 20rem;

  background: var(--main-deep-dark);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: .5rem .5rem;
  border: 2px solid var(--main-grey);
  border-radius: 1rem;

  white-space: nowrap;

  .image{
    margin-left: -20px;
    width: 50px;
    height: 70px;
  }
  span{
    color: #0071eb;
    font-weight: 400;
    letter-spacing: .1;
    font-size: 13px;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`;
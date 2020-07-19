import styled from 'styled-components';
import Image from '../../images/bg.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  
  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url(${Image}) no-repeat center center/cover;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #footer{
     background: rgba(20,20,20, .80); /* passing the main-dark, but with opacity */
  }
`;

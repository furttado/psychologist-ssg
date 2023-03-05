import styled from 'styled-components'
import { theme } from '../styles/globalStyle'

export const Container = styled.div`
  background-color: ${theme.colors.background};
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;

  display: grid;
  grid-template-rows: auto auto auto auto auto;

  @media only screen and (min-width: 768px) {
    width: 70vw;
  }

   /* Estilos para tela de tablet */
   @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80vw;
  };

`


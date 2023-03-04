"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'


export const Container = styled.div`
    background-color: ${theme.colors.background};
    max-width: 100vw;
    height: 100vh;
    margin: 0 auto ;  
    padding: 0;

    div, span , section, main {
        max-width: 100vw;
    };

    display: grid;
    grid-template-rows: auto auto auto auto auto;

    /* Estilos para tela de desktop */
    @media only screen and (min-width: 768px) {
      width: 70vw
    };

    /* Estilos para tela intermediária */
    @media only screen and (min-width: 481px) and (max-width: 767px) {
      width: 80vw;
    };
`


export const GridContainer = styled.div`
    display: grid;
    grid-template-rows: 4fr
`
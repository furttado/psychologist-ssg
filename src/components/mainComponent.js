"use client"
import styled from 'styled-components'
import {theme} from '../styles/globalStyle'
import { CONTENT_BASE } from '../data'

const Main = styled.main`
    background: ${theme.colors.secondaryBackground};
    padding: 7% 3% 7% 3%;
    height: auto;

    display: grid;
    justify-items: center;

    /* Estilos para tela de desktop */
    @media only screen and (min-width: 768px) {
      
    };

    /* Estilos para tela intermediária */
    @media only screen and (min-width: 481px) and (max-width: 767px) {
      
    };


          
`

const Text = styled.p`
    text-align: justify;
    color: ${theme.colors.background};


    /* Estilos para tela de desktop */
    @media only screen and (min-width: 768px) {
      width: 50%
    };

    /* Estilos para tela intermediária */
    @media only screen and (min-width: 481px) and (max-width: 767px) {
      width: 50vw;
    };

`

const Italic = styled.i`
    display: grid;
    grid-template-rows: auto;
   
    align-items: center;
    justify-items: center;

`

const Quote = styled.p`
    width: 90%;
    font-size: 15px ;
    opacity: 0.8 ;
    text-align: justify;
    color: ${theme.colors.background};

        /* Estilos para tela de desktop */
    @media only screen and (min-width: 768px) {
      width: 40%
    };

    /* Estilos para tela intermediária */
    @media only screen and (min-width: 481px) and (max-width: 767px) {
      width: 40%;
    };

`

const Reference = styled.p`
    font-size: 15px;
    opacity: 0.8;
    text-align: right;
    padding-right: 5%;
    color: ${theme.colors.background};

    /* Estilos para tela de desktop */
        @media only screen and (min-width: 768px) {
      width: 50%;
    padding-right: 30%;

    };

    /* Estilos para tela intermediária */
    @media only screen and (min-width: 481px) and (max-width: 767px) {
      width: 50%;
    };



   
`

const Captalize = styled.p`
font-size: ${props => props.size}
`

export default function MainComponent() {
    return (
        <Main>
            <Text>
               {CONTENT_BASE.bio} 
            </Text>
           <br />
            <Italic>
            <Quote>
            &#8220;{CONTENT_BASE.quote}&#8221;
            </Quote>
            </Italic>
            <Reference style={{justifySelf: 'right'}}>{CONTENT_BASE.author}</Reference>
        </Main>
    )
}


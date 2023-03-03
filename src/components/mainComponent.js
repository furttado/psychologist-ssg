"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'

const Main = styled.main`
    background: ${theme.colors.secondaryBackground};
    padding-left: 3%; 
    padding-right: 3%; 
    padding-top: 7%;
    padding-bottom: 7%;
    height: auto;

           
`

const Text = styled.p`
    text-align: justify;
    color: ${theme.colors.background};
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
`

const Reference = styled.p`
    font-size: 15px;
    opacity: 0.8;
    text-align: right;
    padding-right: 5%;
    color: ${theme.colors.background};
   
`

const Captalize = styled.p`
font-size: ${props => props.size}
`

export default function MainComponent() {
    return (
        <Main>
            <Text>
               Sou formada em Psicologia e apaixonada pela linha de trabalho da Gestalt-terapia, 
                uma abordagem que entende uma pessoa como um todo em constante crescimento. 
                O objetivo de meu trabalho é firmar uma parceria terapeuta/cliente que nos leve às 
                mudanças e compreensões esperadas. Juntos! 
            </Text>
           <br />
            <Italic>
            <Quote>
            &#8220;A terapia possibilita ao indivíduo deixar de repetir de forma morta sua vida, apresentando um novo conflito criativo que convida ao crescimento, à mudança, ao excitamento e à aventura de viver.&#8221;
            </Quote>
            </Italic>
            <Reference>Fritz Pearls (1983-1970)</Reference>
        </Main>
    )
}


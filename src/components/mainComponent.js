"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'
import { CONTENT_BASE } from '../data'

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
               {CONTENT_BASE.bio} 
            </Text>
           <br />
            <Italic>
            <Quote>
            &#8220;{CONTENT_BASE.quote}&#8221;
            </Quote>
            </Italic>
            <Reference>{CONTENT_BASE.author}</Reference>
        </Main>
    )
}


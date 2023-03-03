"use client"
import styled from 'styled-components'
import SocialMediaComponent from './socialMediaComponent'
import {theme} from './globalStyle'


const Section = styled.section`
    background-color: none;
    color: ${theme.colors.background};
    
    padding: 10% 3% 13% 3%; 

    display: grid ;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr; 
    justify-items: center;
    
    grid-row-gap: 10%
   
    `
const Cases = styled.span`
   
    border-radius: 50% ;
    background: ${theme.colors.primary};
    width: 100px;
    height: 100px;
    text-align: center ;

    display: grid;
    align-content:center;
    :hover {
        background: ${theme.colors.button};
        color: ${theme.colors.primary};
    }

    font-size: ${props => props.fontSize || 'auto'};
    color: ${theme.colors.background};

`

export default function CasesComponent() {
    return (
        <Section>
            <Cases>depressão</Cases>
            <Cases>baixa <br />autoestima</Cases>
            <Cases>estresse <br />emocional</Cases>
            <Cases>angústias</Cases>
            <Cases>ansiedade</Cases>
            <Cases fontSize={'small'}>autossabotagem</Cases>
        </Section>
    )
}
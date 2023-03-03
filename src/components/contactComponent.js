"use client"
import styled from 'styled-components'
import SocialMediaComponent from './socialMediaComponent'
import {theme} from './globalStyle'


const Section = styled.section`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    padding: 3%; 
`

const Title = styled.p`
    width: 50%;
    font-size: 30px ;
`

const List = styled.ul`
    list-style: inside;
    
`

const Button = styled.button`
    background: ${theme.colors.button};
    color:  ${theme.colors.primary};
    border: 0;
    width: 50%;
    height: 15%;
    font-weight: bolder;
    cursor: pointer;

    :hover {
        background: ${theme.colors.primary};
        color:  ${theme.colors.button};
        box-shadow: 5px 5px 5px ${theme.colors.background}

    }

    margin-bottom: 5% ;
`


export default function ContactComponent() {
    return (
        <Section>
            <Title>Atendimento Presencial e Online</Title>
            <br />
            <List>
                <li>Edifício Bronze, sala 310</li>
                <li>Edifício das Clínicas, sala 109 <br /> Centro - Muriaé | MG</li>
            </List>
            <br />
            <a href='https://wa.me/5532998633669?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%21' target={'_blank'}>
            <Button>AGENDAR</Button>
           </a>
        </Section>
    )
}
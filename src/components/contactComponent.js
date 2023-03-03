"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'
import {Link, Text, footerUrls} from './footerComponent'
import Location from '../files/location.png'
import Image from 'next/image'
import {Icon} from './socialMediaComponent'


const Section = styled.section`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    padding: 10% 3% 12% 3%; 
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
            <Text textAlign={'left'} style={{width: '60vw'}} opacity={'1'}> 
                    <Link href={footerUrls[1]} target="_blank">                   
                    <Icon width={'20px'} height={'20px'}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;Edifício Bronze, sala 310, Centro, Muriaé-MG <br /> 
                    </Link>
                    <br />
                    <Link href={footerUrls[2]} target="_blank">
                    <Icon width={'20px'} height={'20px'}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;Edifício das Clínicas, sala 109, Centro, Muriaé-MG
                    </Link>
                </Text>            <br />
            <a href='https://wa.me/5532998633669?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%21' target={'_blank'}>
            <Button>AGENDAR</Button>
           </a>
        </Section>
    )
}
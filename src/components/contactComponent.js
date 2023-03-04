"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'
import Location from '../files/location.png'
import Image from 'next/image'
import {Icon, Link, Text} from './style'
import {CONTACT_BASE} from '../data'

const Section = styled.section`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    padding: 10% 3% 12% 3%; 
`

const Title = styled.p`
    width: 50%;
    font-size: 30px ;
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
                    <Link href={CONTACT_BASE.address_main_maps} target="_blank">                   
                    <Icon width={'20px'} height={'20px'}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;{CONTACT_BASE.address_main} <br /> 
                    </Link>
                    <br />
                    <Link href={CONTACT_BASE.address_secondary_maps} target="_blank">
                    <Icon width={'20px'} height={'20px'}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;{CONTACT_BASE.address_secondary}
                    </Link>
                </Text>            <br />
            <a href={CONTACT_BASE.whatsapp} target={'_blank'}>
            <Button>AGENDAR</Button>
           </a>
        </Section>
    )
}
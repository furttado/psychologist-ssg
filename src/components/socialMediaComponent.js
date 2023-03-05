"use client"
import styled from 'styled-components'
import Facebook from '../files/facebook.png'
import Instagram from '../files/instagram.png'
import WhatsApp from '../files/whatsapp.png'
import Email from '../files/mail.png'
import Image from 'next/image'
import {Icon} from './style'
import { CONTACT_BASE } from '../data'

const Social = styled.div`
    padding: 3%; 
    width: ${props => props.boxWidth} ;
    height: ${props => props.boxHeight} ;

    display:grid;
    row-gap: ${props => props.rowGap};
    grid-template-columns: ${props => props.columns};
    grid-template-rows: ${props => props.rows};
    justify-items: ${props => props.justifyItems};
    align-content: center;
    margin-right: ${props => props.marginRight};

    /* Estilos para tela de desktop */
    @media only screen and (min-width: 768px) {
        max-width: 20vw;
    };

    /* Estilos para tela intermediária */
    @media only screen and (min-width: 481px) and (max-width: 767px) {
      
    };


`

export default function SocialMediaComponent(props) {
    return (
        <Social 
        boxWidth={props.boxWidth} 
        boxHeight={props.boxHeight} 
        columns={props.columns} 
        rows={props.rows}
        rowGap={props.rowGap}
        justifyItems={props.justifyItems}
        marginRight={props.marginRight}
        >
            <a href={CONTACT_BASE.whatsapp} target={'_blank'}>
                <Icon width={props.width} height={props.height}>
                    <Image src={WhatsApp} alt='Whatsapp icon'/>
                </Icon>
            </a>

            <a href={CONTACT_BASE.instagram} target={'_blank'}>
                <Icon width={props.width} height={props.height}>
                    <Image src={Instagram} alt='Instagram icon' />
                </Icon>
            </a>

            <a href={CONTACT_BASE.facebook} target={'_blank'}>
                <Icon width={props.width} height={props.height}>
                    <Image src={Facebook} alt='Facebook icon'/>
                </Icon>
            </a>

            <a href={CONTACT_BASE.email_url} target={'_blank'}>
                <Icon width={props.width} height={props.height}>
                    <Image src={Email} alt='Email icon'/>
                </Icon>
            </a>

        </Social>
    )
}



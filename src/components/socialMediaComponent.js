"use client"
import styled from 'styled-components'
import Facebook from '../files/facebook.png'
import Instagram from '../files/instagram.png'
import WhatsApp from '../files/whatsapp.png'
import Image from 'next/image'
import {Icon} from './style'
import { CONTACT_BASE } from '../data'

const Social = styled.div`
    padding: 3%; 
    width: ${props => props && props.boxWidth} ;
    height: ${props => props && props.boxHeight} ;

    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

`

export default function SocialMediaComponent(props) {
    return (
        <Social boxWidth={props.boxWidth} boxHeight={props.boxHeight}>
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
        </Social>
    )
}



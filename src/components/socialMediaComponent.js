"use client"
import styled from 'styled-components'
import Facebook from '../files/facebook.png'
import Instagram from '../files/instagram.png'
import WhatsApp from '../files/whatsapp.png'
import Image from 'next/image'


const Social = styled.div`
    padding: 3%; 
    width: ${props => props && props.boxWidth} ;
    height: ${props => props && props.boxHeight} ;

    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

`

export const Icon = styled.button`
    background: none;
    border: none ;
    cursor: pointer;
    opacity: ${props => props.opacity || 0.8};

    img { 
    width:${props => props.width} ;
    height: ${props => props.height} ;   

    }
   
`

export default function SocialMediaComponent(props) {
    return (
        <Social boxWidth={props.boxWidth} boxHeight={props.boxHeight}>
            <a href='https://wa.me/5532998633669?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%21' target={'_blank'}>
                <Icon width={props.width} height={props.height}>
                    <Image src={WhatsApp} alt='Whatsapp icon'/>
                </Icon>
            </a>

            <a href='https://www.instagram.com/kellymarapsi/' target={'_blank'}>

                <Icon width={props.width} height={props.height}>
                    <Image src={Instagram} alt='Instagram icon' />
                </Icon>
            </a>

            <a href='https://www.facebook.com/kellymarapsi' target={'_blank'}>
                <Icon width={props.width} height={props.height}>
                    <Image src={Facebook} alt='Facebook icon'/>
                </Icon>
            </a>
        </Social>
    )
}



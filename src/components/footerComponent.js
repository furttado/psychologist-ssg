"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'
import SocialMediaComponent from './socialMediaComponent'
import Phone from '../files/phone.png'
import Location from '../files/location.png'
import Email from '../files/mail.png'
import Image from 'next/image'
import {Icon, Text, Link, footerUrls} from './style'
import {CONTACT_BASE} from '../data'

const Footer = styled.footer`
    background: ${theme.colors.secondary} ;
    padding: 5% 3% 10% 3% ;

    display: grid;
    grid-template-rows: auto auto ;
    height: fit-content;
    
    align-items: center;
    justify-items: center;
`

const Box = styled.section`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    min-height: 100%;
    margin-bottom: 10%;
    align-items: center;
    align-content: center;
    justify-items: center;

`

const iconSize = '22px'
const leftIconsSize = '22px'


export default function FooterComponent(props) {
    return (
        <Footer>
            <Box>
                <Text 
                textAlign={'left'} 
                opacity={0.8} 
                style={{display: 'grid', rowGap: '4.5%', minHeight:'fit-content', alignContent:'center', width:'70vw'}} 
               > 
                    <Link href={CONTACT_BASE.phone_link} target="_blank">
                    <Icon width={leftIconsSize} height={leftIconsSize}><Image src={Phone} alt='telefone'/></Icon> &nbsp;{CONTACT_BASE.phone} <br />
                    </Link>
                    <Link href={CONTACT_BASE.email_url} target="_blank">
                    <Icon width={leftIconsSize} height={leftIconsSize}><Image src={Email} alt='email'/></Icon> &nbsp;{CONTACT_BASE.email} <br />
                    </Link>
                    <Link href={CONTACT_BASE.address_main_maps} target="_blank">                   
                    <Icon width={leftIconsSize} height={leftIconsSize}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;{CONTACT_BASE.address_main} <br /> 
                    </Link>
                    <Link href={CONTACT_BASE.address_secondary_maps} target="_blank">
                    <Icon width={leftIconsSize} height={leftIconsSize}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;{CONTACT_BASE.address_secondary}
                    </Link>
                </Text>
                <SocialMediaComponent 
                    width={iconSize} 
                    height={iconSize} 
                    boxWidth={'fit-content'}
                    columns={'1fr'}
                    rows={'4fr'}
                    rowGap={'5%'}
                />
            </Box>

            <Text fontSize={'small'} textAlign={'center'}>Kelly Mara 2022 |
                <Link href='https://www.linkedin.com/in/furttado/' target={'_blank'}>
                    | Webpage criada e desenvolvida por @furttado
                </Link>
            </Text>
            
        </Footer>
    )
}

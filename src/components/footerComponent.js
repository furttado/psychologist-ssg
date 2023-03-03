"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'
import SocialMediaComponent from './socialMediaComponent'


const Footer = styled.footer`
    background: ${theme.colors.secondary} ;
    padding: 5% 3% 5% 3% ;

    display: grid;
    align-items: center;
    justify-items: center;
`

const Text = styled.p`
    color: ${theme.colors.primary};
    font-size: small ;
    text-align: center ;

`

const Link = styled.a`
        text-decoration: none;
        color: white

`

const iconSize = '19px'

export default function FooterComponent(props) {
    return (
        <Footer>
            <SocialMediaComponent width={iconSize} height={iconSize} boxWidth={'50%'}/>
            <Text>Kelly Mara 2023 | 
            <Link href='https://www.linkedin.com/in/furttado/' target={'_blank'}>
                | Webpage criada e desenvolvida por @furttado
            </Link>
            </Text>
        </Footer>
    ) }

"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'
import SocialMediaComponent from './socialMediaComponent'
import Phone from '../files/phone.png'
import Location from '../files/location.png'
import Image from 'next/image'
import {Icon} from './socialMediaComponent'

const Footer = styled.footer`
    background: ${theme.colors.secondary} ;
    padding: 5% 3% 10% 3% ;

    display: grid;
    row-gap: 15%;
    
    align-items: center;
    justify-items: center;
`

const Text = styled.p`
    color: ${theme.colors.primary};
    font-size: ${props => props && props.fontSize};
    text-align: ${props => props.textAlign || 'center'} ;
    
`

const Link = styled.a`
        text-decoration: none;
        color: white;

`

const Box = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

`

const iconSize = '19px'

export default function FooterComponent(props) {
    return (
        <Footer>
            <Box>
                <Text textAlign={'justify'} fontSize={'small'}> 
                    <Icon width={'20px'} height={'20px'}><Image src={Phone} alt='telefone'/></Icon> &nbsp;32 9863-3669 <br />
                    <Icon width={'20px'} height={'20px'}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;Edifício Bronze, sala 310, Centro, Muriaé-MG <br /> 
                    <Icon width={'20px'} height={'20px'}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;Edifício das Clínicas, sala 109, Centro, Muriaé-MG
                </Text>
                <SocialMediaComponent width={iconSize} height={iconSize} boxWidth={'40vw'} />
            </Box>


            <Text fontSize={'small'} textAlign={'center'}>Kelly Mara 2022 |
                <Link href='https://www.linkedin.com/in/furttado/' target={'_blank'}>
                    | Webpage criada e desenvolvida por @furttado
                </Link>
            </Text>
        </Footer>
    )
}

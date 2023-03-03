"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'
import SocialMediaComponent from './socialMediaComponent'
import Phone from '../files/phone2.png'
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

export const Text = styled.p`
    color: ${props => props.color || theme.colors.primary};
    font-size: ${props => props && props.fontSize};
    text-align: ${props => props.textAlign || 'center'} ;
    opacity: ${props => props.opacity || 1};
    
`

export const Link = styled.a`
        text-decoration: none;
        color: white;

`

const Box = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

`

const iconSize = '22px'

export const footerUrls = [
'https://wa.me/5532998633669?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%21',
 'https://www.google.com.br/maps/place/Consult%C3%B3rio+Psicol%C3%B3gico/@-21.1310201,-42.3649779,17z/data=!3m1!4b1!4m6!3m5!1s0xbcc731a070d8b7:0xfa0714aae038ebc4!8m2!3d-21.1310201!4d-42.3649779!16s%2Fg%2F11gyn7bhnh?authuser=0&hl=pt-BR',
 'https://www.google.com.br/maps/place/Edif%C3%ADcio+Das+Cl%C3%ADnicas/data=!4m7!3m6!1s0xbcc6681472f175:0x56725540319e3b52!8m2!3d-21.1373539!4d-42.3652792!16s%2Fg%2F11gbkt0dw3!19sChIJdfFyFGjGvAARUjueMUBVclY?authuser=0&hl=pt-BR&rclk=1'
]



export default function FooterComponent(props) {
    return (
        <Footer>
            <Box>
                <Text textAlign={'left'} opacity={0.8}> 
                    <Link href={footerUrls[0]} target="_blank">
                    <Icon width={'20px'} height={'20px'}><Image src={Phone} alt='telefone'/></Icon> &nbsp;32 9863-3669 <br />
                    </Link>
                    <Link href={footerUrls[1]} target="_blank">                   
                    <Icon width={'20px'} height={'20px'}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;Edifício Bronze, sala 310, Centro, Muriaé-MG <br /> 
                    </Link>
                    <Link href={footerUrls[2]} target="_blank">
                    <Icon width={'20px'} height={'20px'}><Image src={Location} alt='endereço'/></Icon>
                    &nbsp;Edifício das Clínicas, sala 109, Centro, Muriaé-MG
                    </Link>
                </Text>
                <SocialMediaComponent width={iconSize} height={iconSize} boxWidth={'50vw'} />
            </Box>


            <Text fontSize={'small'} textAlign={'center'}>Kelly Mara 2022 |
                <Link href='https://www.linkedin.com/in/furttado/' target={'_blank'}>
                    | Webpage criada e desenvolvida por @furttado
                </Link>
            </Text>
        </Footer>
    )
}

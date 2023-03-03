"use client"
import styled from 'styled-components'
import ProfilePicture from '../files/profile_picture2.png'
import Image from 'next/image'
import {theme} from './globalStyle'
import SocialMediaComponent from './socialMediaComponent'



export const Header = styled.header`
    background-color: none;
    color: ${theme.colors.primary};
    padding: 3%;
    margin-bottom: 5%;  

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    column-gap: 5%;
    
    h1, p, span {
    width: fit-content
   };

  
`

const ImageProfile = styled.span`
  grid-area: "ImageProfile";
  img { 
    border-radius: 50%;
    width:145px;
    height: 145px ;
    border: solid 2px white
    }
`

const Title = styled.section`
  justify-self: right;
  grid-area: 'Title';
   
`

const SocialMenu = styled.div`
  padding: 2%;
  display: grid;
  justify-content: right;
`

const iconSize = '22px'

export default function HeaderComponent() {
return (
  <>
      <SocialMenu>
      <SocialMediaComponent width={iconSize} height={iconSize} boxWidth={'50vw'}/>
      </SocialMenu>
      <Header>
      <Title>
        <h1 style={{fontSize: theme.fontSize.h1}}>Kelly<br />Mara</h1>
        <p>PSICÓLOGA</p>
        <p style={{fontSize:'10px'}}>CRP 04/66369</p>
      </Title>
    
      <ImageProfile>
      <Image 
            src={ProfilePicture}
            alt="Kelly Mara Psicóloga"
           
        />
      </ImageProfile>
    
    </Header>

  </>
    )

}

<Image style={{borderRadius: '50%', overflow: 'hidden', width:'200px', height:'200px'}}
            src={ProfilePicture}
            alt="Kelly Mara Psicóloga"
           
        />

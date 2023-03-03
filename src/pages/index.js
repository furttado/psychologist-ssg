"use client"
import GlobalStyle  from '../components/globalStyle'
import {theme} from '../components/globalStyle'
import { ThemeProvider } from 'styled-components'

import {Container} from '../components/container'
import HeaderComponent from '../components/headerComponent'
import MainComponent from '../components/mainComponent'
import ContactComponent from '../components/contactComponent'
import CasesComponent from '../components/casesComponent'
import FooterComponent from '../components/footerComponent'
import Head from 'next/head';


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
  <title>Kelly Mara Psicóloga</title>
  <meta name="Kelly, Psicóloga em Muriaé-MG - Tratamento para problemas emocionais e psicológicos - Atendimento presencial e online - Consulta com psicóloga experiente - Agendamento pelo WhatsApp" content="Kelly é uma psicóloga experiente que oferece tratamento presencial e online para diversos problemas emocionais e psicológicos em Muriaé-MG. Agende sua consulta pelo WhatsApp e receba ajuda profissional de uma psicóloga experiente." />
  <link rel='icon' href='/favicon3.ico' />
</Head>
    <GlobalStyle />
   <Container>
     <HeaderComponent/>
     <MainComponent />
     <ContactComponent />   
     <CasesComponent />
     <FooterComponent />
   </Container>
   </ThemeProvider>

  )
}

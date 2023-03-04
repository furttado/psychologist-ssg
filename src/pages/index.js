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
        <meta name="Kelly Mara, Psicóloga em Muriaé-MG" content="Psicóloga em Muriaé-MG. Tratamento para ansiedade, depressão e outros problemas emocionais. Atendimento presencial e online. Agende sua consulta via WhatsApp." />
        <link rel='icon' href='/favicon.ico' />
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

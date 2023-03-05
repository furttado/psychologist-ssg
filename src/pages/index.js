"use client"
import GlobalStyle  from '../styles/globalStyle'
import {theme} from '../styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import {Container} from '../components/container'
import HeaderComponent from '../components/headerComponent'
import MainComponent from '../components/mainComponent'
import ContactComponent from '../components/contactComponent'
import CasesComponent from '../components/casesComponent'
import FooterComponent from '../components/footerComponent'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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

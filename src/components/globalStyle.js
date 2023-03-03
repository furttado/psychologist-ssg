"use client"
import styled from 'styled-components'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

export const theme = {
    colors: {
        primary: 'white',
        secondary: '#2B2B2B',
        background: '#202020',
        secondaryBackground: '#D9D9D9',
        button: '#F91F39',
    },
    fontSize: {
        h1: '50px'
    }
}


const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
  
    };
    
    body{
        background: ${theme.colors.background};
        font-family: 'Antic Slab', serif;

        h1: {
        font-size: 50px;
        }
    }
  
    `


export default GlobalStyle
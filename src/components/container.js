"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'


export const Container = styled.div`
   
    background-color: ${theme.colors.background};
    max-width: 100vw;
    height: 100vh;
    margin: 0 auto ;  
    padding: 0;

    p {
      
    }
    div, span , section, main {
        max-width: 100vw;
    }

  

  

    display: grid;
    grid-template-rows: auto auto auto auto auto;
   


    
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-rows: 4fr
`
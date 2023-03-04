"use client"
import styled from 'styled-components'
import {theme} from './globalStyle'

export const Icon = styled.button`
    background: none;
    border: none ;
    cursor: pointer;
    opacity: ${props => props.opacity || 0.8};

    img { 
    width:${props => props.width} ;
    height: ${props => props.height} ;   
    }

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

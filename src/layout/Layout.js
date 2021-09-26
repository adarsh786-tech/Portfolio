import React from 'react'
import ParticleBackground from '../components/Animation/ParticleBackground'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
      
     <Header/>
     {/* <ParticleBackground /> */}
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}

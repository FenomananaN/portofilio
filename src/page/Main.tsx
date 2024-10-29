import { Box } from '@mui/material'
import React from 'react'
import { Footer, Header } from '../component/ui'
import { About, Contact, Home, Services, Skills } from '../scene'

export const Main = () => {
  return (
    <Box>
      <Header/>
      <Home id='home'/>
      <About id='about'/>
      <Services id='service'/>
      <Skills id='skills'/>
      <Contact id='contact'/>
      <Footer/>
    </Box>
  )
}

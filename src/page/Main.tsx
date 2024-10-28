import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../component/ui'
import { About, Home, Services } from '../scene'

export const Main = () => {
  return (
    <Box>
      <Header/>
      <Home id='home'/>
      <About id='about'/>
      <Services id='service'/>
    </Box>
  )
}

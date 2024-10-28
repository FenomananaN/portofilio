import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const Home = ({id}:{id:string}) => {
  return (

    <Container>
    <Box id={id} sx={{
      height:'100vh',
      pt:{xs:9,md:9},
      //bgcolor:'red'
    }}>
      <Grid container sx={{height:'100%',}}>
        <Grid item xs={12} md={6} 
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            //bgcolor:'red'

          }}>
          <Box sx={{pb:{xs:9,md:9},}}>
            <Typography variant='h6' color='#0088ff'>
              NOMENJANAHARY Fenomanana Valentin
            </Typography>
            <Box sx={{display:'flex',mt:1,}}>
            <Typography variant='h3' sx={{fontSize:{xs:36,md:50},fontWeight:'bold'}}>Electronic Engineer</Typography>
            <Typography variant='h3' color='#0088ff' sx={{fontSize:{xs:36,md:50},ml:1,fontWeight:'bold'}}>&</Typography>
            </Box>
            <Typography variant='h3' color='#0088ff'  sx={{fontSize:{xs:36,md:50},fontWeight:'bold'}}>Fullstack Developer</Typography>
            <Typography sx={{mt:1}}>
              Enthusiastic tech innovator and educator dedicated to empowering communities 
              <br/>through coding, language learning, and sustainable solutions.</Typography>
              <Box sx={{display:'flex', mt:2}}>
                  <Button color='strongBlue' variant='contained'>Conctact</Button>
                  <Button color='strongBlue' variant='outlined' sx={{ml:1}}>Download my CV</Button>
              </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>

        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

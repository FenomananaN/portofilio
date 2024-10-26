import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const Home = ({id}:{id:string}) => {
  return (
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
            <Typography variant='h6' color='blue'>
              NOMENJANAHARY Fenomanana Valentin
            </Typography>
            <Box sx={{display:'flex',mt:1,}}>
            <Typography variant='h3' sx={{fontWeight:'bold'}}>Electronic Engineer</Typography>
            <Typography variant='h3' color='blue' sx={{ml:1,fontWeight:'bold'}}>&</Typography>
            </Box>
            <Typography variant='h3' color='blue'  sx={{fontWeight:'bold'}}>Fullstack Developer</Typography>
            <Typography sx={{mt:1}}>
              Enthusiastic tech innovator and educator dedicated to empowering communities 
              <br/>through coding, language learning, and sustainable solutions.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>

        </Grid>
      </Grid>
    </Box>
  )
}

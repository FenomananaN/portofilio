import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../component/ui'
import uxui from '../asset/image/What-is-a-UI-UX-Designer.webp'
import mobilImage from '../asset/image/mobile.webp'
import webDev from '../asset/image/best-web-development-tools.webp'
import dcImg from '../asset/image/datascience.webp'
import bcImg from '../asset/image/blockchain.webp'
 
export const Services = ({id}:{id:string}) => {
  return (
    <Box id={id} sx={{pb:3}}>
      <Container>
        <Title title='Services'/>
        <Typography sx={{color:'#fff', fontWeight:'bold'}}>What May I help You?</Typography>
        <Typography>
            Discover how my expertise can meet your needs with tailored and high-performance solutions.
        </Typography>
        <Grid container sx={{display:'flex', justifyContent:'start', mt:2}}>
          <Grid item xs={12} md={4}>
              <Paper sx={{p:2, m:1 ,height:300}}>
                <Box sx={{display:'flex',justifyContent:'center',mb:1}}>
                  <Box component='img' src={uxui} width={'60%'}/>
                </Box>
                <Typography variant='h6' align='center' sx={{color:'#0088ff', fontWeight:'bold', fontSize:16}}>UX/UI DESIGN</Typography>
                <Typography>User Interface Design</Typography>
                <Typography>Logo,social media post,flyers and poster design</Typography>
              </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
              <Paper sx={{p:2, m:1 ,height:300}}>
              <Box sx={{display:'flex',justifyContent:'center',mb:1}}>
                  <Box component='img' src={webDev} width={'60%'}/>
                </Box>
                <Typography variant='h6' align='center' sx={{color:'#0088ff', fontWeight:'bold', fontSize:16}}>WEB DEVELOPEMENT</Typography>
                <Typography>Creation of  websites, blogs, etc.</Typography>
                <Typography>Interactive and dynamic web applications</Typography>
              </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
              <Paper sx={{p:2, m:1 ,height:300}}>
                <Box sx={{display:'flex',justifyContent:'center',mb:1}}>
                  <Box component='img' src={bcImg} width={'60%'}/>
                </Box>
                <Typography variant='h6' align='center' sx={{color:'#0088ff', fontWeight:'bold', fontSize:16}}>BLOCKCHAIN APPLICATION</Typography>
                <Typography>Token creation, smartcontract development, etc.</Typography>
                <Typography>Fontend Application for Smartcontact</Typography>
              </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
              <Paper sx={{p:2, m:1,height:300}}>
                <Box sx={{display:'flex',justifyContent:'center',mb:1}}>
                  <Box component='img' src={dcImg} width={'60%'}/>
                </Box>
                <Typography variant='h6' align='center' sx={{color:'#0088ff', fontWeight:'bold', fontSize:16}}>DATA SCIENCE & IA</Typography>
                <Typography>Data Analysis and Visualization.</Typography>
                <Typography>Prompt Engineering and Optimization, Fine-tuning AI Models(ChatGpt,Gemini)</Typography>
              </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
              <Paper sx={{p:2, m:1 ,height:300}}>
              <Box sx={{display:'flex',justifyContent:'center',mb:1}}>
                  <Box component='img' src={mobilImage} width={'60%'}/>
                </Box>
                <Typography variant='h6' align='center' sx={{color:'#0088ff', fontWeight:'bold', fontSize:16}}>MOBILE APPLICATION</Typography>
                <Typography>Cross-Platform App Development.</Typography>
                <Typography>Native Android App Development:</Typography>
              </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

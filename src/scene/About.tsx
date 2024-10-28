import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../component/ui'
import { SocialLogo } from '../component'

export const About = ({id}:{id:string}) => {
  return (
    <Box id={id}>
      <Paper elevation={1} sx={{pt:2,pb:6}}>
        <Container>
        <Grid container sx={{height:'100%',}}>
        <Grid item xs={12} md={4} 
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            //bgcolor:'red'

          }}>
          <Box sx={{}}>
            
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{display:'flex',justifyContent:'center',mb:{xs:1,sm:4}, mt:2}}>
          <Title title='About'/>
          </Box>
          <Box >
          <Divider sx={{mb:2}}/>
          <Typography sx={{py:0.5}}>
          &ensp;&emsp; &emsp; Hello, I'm <Box component={'span'} sx={{fontWeight:'bold',color:'#0088ff'}}>FENOMANANA</Box> a dedicated electronics engineer and web developer with a passion for <Box component={'span'} sx={{fontWeight:'bold'}}> creating impactful tech solutions</Box>. I have a diverse background in embedded systems, web development, and mobile applications, along with experience in various projects.
          </Typography>
          <Typography sx={{py:0.5}}>
          &ensp;&emsp; &emsp; Moreover, I'm also actively engaged in social community. I  <Box component={'span'} sx={{fontWeight:'bold'}}> take on a leadership role within an English community</Box>, where I guide members, organize activities, and create a supportive environment for practicing English.
          </Typography>
          <Typography sx={{py:0.5}}>
          &ensp;&emsp; &emsp; In addition, with an entrepreneurial mindset, I'm always on <Box component={'span'} sx={{fontWeight:'bold'}}>the lookout for innovative ways to make a positive impact</Box>. I enjoy identifying opportunities where I can bring value, whether by developing solutions, creating meaningful projects, or helping others reach their potential. 
          </Typography >
          <Typography sx={{py:0.5}}>
          &ensp;&emsp; &emsp; <Box component={'span'} sx={{fontWeight:'bold',color:'#0088ff'}}>My goal is to build technology that improves lives and empowers communities</Box>. If you're interested in collaborating , feel free to reach out!
          </Typography>
          <Box sx={{display:'flex', justifyContent:'center',my:1}}>
            <SocialLogo size={30} fill='white'/>
          </Box>
          <Divider sx={{mt:2}}/>
          </Box>
        </Grid>
      </Grid>

      </Container>
      </Paper>
    </Box>
  )
}

import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../component/ui'

import { ReactComponent as GmailIcon } from '../asset/logo/Gmail_logo-cropped.svg'
import { ReactComponent as WhatsappIcon } from '../asset/logo/whatsapp.svg'
import { ReactComponent as LocationIcon } from '../asset/logo/Free-White-Location-Clipart-01 png-cropped.svg'
import { OnlySocialLogo } from '../component'

export const Contact = ({id}:{id:string}) => {
  return (
    
    <Box id={id}>
        <Container sx={{pb:6}}>
            <Title title='Me Contacter'/>
            <Grid container sx={{height:'100%',}}>
            <Grid item xs={12} md={6} 
            sx={{
                display:{xs:'block',md:'flex'},
                justifyContent:'center',
                alignItems:'center',
                position:'relative'
                //bgcolor:'red'

            }}>
                <Box sx={{mb:{xs:6,md:0}}}>
                    <Box sx={{display:'flex', alignItems:'center', my:2}}>
                        <LocationIcon width={25}/>
                        <Typography sx={{fontWeight:'bold', fontSize:{xs:16,md:20}, ml:1}}>CU Akatso I door 284</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', my:2}}>
                        <GmailIcon width={30} />
                        <Typography sx={{fontWeight:'bold', fontSize:{xs:16,md:20}, ml:1}}>fenomanana.nomenjanahary@gmail.com</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', my:2}}>
                        <WhatsappIcon width={30} fill='#0088ff'/>
                        <Typography sx={{fontWeight:'bold', fontSize:{xs:16,md:20}, ml:1}}>+261340459282</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},alignItems:'center',position:{xs:'none',md:'absolute'},bottom:0}}>
                    <Typography sx={{mr:1}}>Follow me on social media:</Typography>
                    <OnlySocialLogo size={25} fill={'white'}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{my:{xs:6,md:0}}}>
                <Stack spacing={1}>
                <TextField color='strongBlue' label='Email' fullWidth/>
                <TextField color='strongBlue' label='Subject' fullWidth/>
                <TextField color='strongBlue' label='Message' multiline rows={4} fullWidth/>
                <Button variant='contained' color='strongBlue'>
                    send
                </Button>
                </Stack>
            </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

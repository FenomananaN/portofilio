import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Title } from '../component/ui'

//import { ReactComponent as Icon } from '../asset/techno'
import { ReactComponent as HtmlIcon } from '../asset/techno/html-5.svg'
import { ReactComponent as CssIcon } from '../asset/techno/css.svg'
import { ReactComponent as MaterialUiIcon } from '../asset/techno/materialui.svg'
import { ReactComponent as CIcon } from '../asset/techno/c-programming-language-seeklogo.com.svg'
import { ReactComponent as IllustratorIcon } from '../asset/techno/adobe-illustrator.svg'
import { ReactComponent as PhotoshopIcon } from '../asset/techno/adobe-photoshop.svg'
import { ReactComponent as AndroidIcon } from '../asset/techno/android-logo-svgrepo-com.svg'
import { ReactComponent as ArduinoIcon } from '../asset/techno/arduino.svg'
import { ReactComponent as FlutterIcon } from '../asset/techno/flutter-svgrepo-com.svg'
import { ReactComponent as GitIcon } from '../asset/techno/git.svg'
import { ReactComponent as JavaIcon } from '../asset/techno/java-svgrepo-com.svg'
import { ReactComponent as JsIcon } from '../asset/techno/js.svg'
import { ReactComponent as MysqlIcon } from '../asset/techno/mysql-original-wordmark.svg'
import { ReactComponent as NginxIcon } from '../asset/techno/nginx.svg'
import { ReactComponent as NodeIcon } from '../asset/techno/node.svg'
import { ReactComponent as PhpIcon } from '../asset/techno/php.svg'
import { ReactComponent as PythonIcon } from '../asset/techno/python.svg'
import { ReactComponent as SymfonyIcon } from '../asset/techno/symfony.svg'
import { ReactComponent as TypsciptIcon } from '../asset/techno/typescript.svg'
import { ReactComponent as BootstrapIcon } from '../asset/techno/bootstrap-svgrepo-com.svg'
import { ReactComponent as AwsIcon } from '../asset/techno/Amazon_Web_Services_Logo.svg'
import { ReactComponent as ReactIcon } from '../asset/techno/react-svgrepo-com (1).svg'
import { ReactComponent as VueIcon } from '../asset/techno/vue-9-logo-svgrepo-com.svg'
import { ReactComponent as UmlIcon } from '../asset/techno/Unified Modelling Language (UML).svg'


export const Skills = ({id}:{id:string}) => {
  return (
    <Container id={id}>
        <Grid container sx={{display:'flex', justifyContent:'center'}}>
            <Grid item xs={12} md={6}>
                <Title title='My skills'/>

                <Box sx={{display:'flex',flexWrap:'wrap' , my:{xs:2,md:6}}}>

                    <Box sx={{m:1}}><PhpIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><ReactIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><SymfonyIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><TypsciptIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><JsIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><HtmlIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><CssIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><MaterialUiIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><BootstrapIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><PythonIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><CIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><ArduinoIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><JavaIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><AndroidIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><FlutterIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><MysqlIcon width={90} height={40}/></Box>
                    <Box sx={{m:1}}><NodeIcon width={90} height={40}/></Box>
                    <Box sx={{m:1}}><VueIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><GitIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><UmlIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><AwsIcon width={50} height={40}/></Box>
                    <Box sx={{m:1}}><NginxIcon width={70} height={40}/></Box>
                    <Box sx={{m:1}}><PhotoshopIcon width={40} height={40}/></Box>
                    <Box sx={{m:1}}><IllustratorIcon width={40} height={40}/></Box>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

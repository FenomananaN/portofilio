import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Drawer, IconButton, List, ListItem } from '@mui/material';
import { ColorModeContext } from '../../theme';
//import { Link } from 'react-scroll'
import { TiThMenuOutline } from "react-icons/ti"
import { page } from '../../utils';
import { Link } from 'react-scroll';
import { DrawerAppbar } from '../DrawerAppbar';

function ElevationScroll(props: any) {

  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 1 : 0,
      })
    : null;
}

export const Header = (props: any) => {

  const { toggleColorMode } = React.useContext(ColorModeContext);

  
  const [anchorElNav, setAnchorElNav] = React.useState(false)

    const handleOpenNavMenu = () => {
        setAnchorElNav(true);
    }
   

  return (
      <>
      <ElevationScroll {...props}>
        <AppBar>
          <Container sx={{xs:'none',md:'flex'}}>
            <Toolbar sx={{px:0}}>


                {/* logo */}
            <Box sx={{display:{ xs: 'none', md: 'flex' }}}>
                    
                </Box>
            
                <Box sx={{
                    display: {xs:'none',md:'flex'},
                    flexDirection: 'column',
                    justifyContent: 'center',
                    ml:2
                }}>
                    <Typography align={'center'} variant='h6' sx={{fontWeight:'bold', fontFanily:'Mono'}} width={40} height={40}>
                        Fenomanana
                    </Typography>
                </Box>

                {/* START MOBILE VIEW */}
                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                       <TiThMenuOutline />
                    </IconButton>
                    <DrawerAppbar page={page} open={anchorElNav} setOpen={setAnchorElNav}/>
                    
                </Box>

                {/* logo */}
                <Box sx={{display:{ xs: 'flex', md: 'none' }}}>
                    
                </Box>
                
                {/*
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                    mx: 2,
                    display: { xs: 'flex', md: 'none' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.5rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    TATA
                </Typography>/*}
                {/* END MOBILE VIEW */}

                {/* START LARGE VIEW */}

                <Box sx={{ flexGrow: 1 }}>
            
                </Box>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    {page.map((page) => (
                    <Link
                        key={page.title}
                        //onClick={handleCloseNavMenu}
                        style={{ color: 'white', display: 'block' , cursor:'pointer'}}
                        to={page.link}
                        spy={true} smooth={true} offset={page.offset} duration={500}
                    >
                        <Typography variant='h6' sx={{
                            mx:1, 
                            fontSize: 18,
                            //fontFamily: 'monospace',
                            fontWeight: 200,
                            //letterSpacing: '.3rem',
                            color: 'inherit',
                    }}>{page.title.toUpperCase()}</Typography>
                    </Link>
                    ))}
                </Box>
                {/* END LARGE VIEW */}
            </Toolbar>
            </Container>
        </AppBar>
      </ElevationScroll>
      </>
  );
}

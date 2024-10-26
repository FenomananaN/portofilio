import { Box, Drawer, IconButton, List, Typography, useTheme } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-scroll'
import { pageType } from '../utils'
import { MdOutlineCancel } from "react-icons/md"


type DrawerAppbarProps = {
    page: pageType;
    open: boolean;
    setOpen: (open: boolean) => void;
  };


export const DrawerAppbar:FC<DrawerAppbarProps> = ({page,open,setOpen}) => {
     

    const handleCloseNavMenu = () => {
        setOpen(false);
    }

  return (
    <Drawer
        open={open}
        onClose={handleCloseNavMenu}
        PaperProps={{
            elevation:0,
            sx:{
                mt:9,
                ml:4,
                width:200,
                height: 'fit-content',
                backgroundColor: '#0088ff'
            }
        }}
        >
            <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems: 'center'
            }}>
            <IconButton onClick={handleCloseNavMenu}>
                <MdOutlineCancel/>
            </IconButton>
            <List sx={{
                mx:4,
                display:'flex',
                flexDirection: 'column',
                alignItems:'center'
            }}>
            {page.map((page) => (
                <Link
                    key={page.title}
                    to={page.link}
                    onClick={handleCloseNavMenu}
                    activeClass='active-on-mobile'
                    style={{ color: 'white', display: 'block', cursor:'pointer'}}
                    spy={true} smooth={true} offset={page.offset} duration={500}
                >
                    <Typography >{page.title}</Typography>
                </Link>
                ))
            }
            </List>
            </Box>
    </Drawer>
  )
}

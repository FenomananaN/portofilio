import { Box } from '@mui/material'
import React from 'react'
import { Title } from '../component/ui'

export const Services = ({id}:{id:string}) => {
  return (
    <Box id={id}>
        <Title title='Services'/>
    </Box>
  )
}

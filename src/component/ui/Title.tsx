import { Typography } from '@mui/material'
import React from 'react'

export const Title = ({title}:{title:string}) => {
  return (
    <Typography variant='h6' color='blue' sx={{fontWeight:'bold',my:1}}>{title.toUpperCase()}</Typography>
  )
}

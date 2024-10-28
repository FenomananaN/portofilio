import { IconButton } from '@mui/material'
import React from 'react'
type LogoProps = {
    logo: React.ReactNode,
    to: string
}
export const LogoLink = ({logo,to}:LogoProps) => {
  return (
    <IconButton href={to} target='_blank' rel='noopener noreferrer'>
        {logo}
    </IconButton>
  )
}

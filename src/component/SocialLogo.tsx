import { Box } from '@mui/material'
import React from 'react'
import {ReactComponent as FacebookIcon } from '../asset/logo/facebook-cropped.svg'
import {ReactComponent as XIcon } from '../asset/logo/icons8-twitterx-cropped.svg'
import {ReactComponent as LinkedinIcon } from '../asset/logo/icons8-linkedin-cropped.svg'
import {ReactComponent as GithubIcon } from '../asset/logo/github-cropped.svg'
import { ReactComponent as GitLabIcon } from '../asset/logo/gitlab-logo.svg'
import { LogoLink } from './ui'

export const SocialLogo = ({size, fill}:{size:number,fill:string}) => {
  return (
    <Box sx={{display:'flex'}}>
        <LogoLink to='jh' logo={<FacebookIcon width={size} height={size} fill={fill}/>}/>
        <LogoLink to='hj' logo={<XIcon width={size} height={size} fill={fill}/>} />
        <LogoLink to='' logo={<LinkedinIcon  width={size} height={size} fill={fill}/>}/>
        <LogoLink to='' logo={<GithubIcon width={size} height={size} fill={fill}/>}/>
        <LogoLink to='' logo={<GitLabIcon width={size} height={size} fill={fill}/>}/>
    </Box>
  )
}

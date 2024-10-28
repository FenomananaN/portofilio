import { Box } from '@mui/material'
import React from 'react'
import {ReactComponent as FacebookIcon } from '../asset/logo/facebook-cropped.svg'
import {ReactComponent as XIcon } from '../asset/logo/icons8-twitterx-cropped.svg'
import {ReactComponent as LinkedinIcon } from '../asset/logo/icons8-linkedin-cropped.svg'
import {ReactComponent as GithubIcon } from '../asset/logo/github-cropped.svg'
import { ReactComponent as GitLabIcon } from '../asset/logo/gitlab-logo.svg'
import { ReactComponent as GmailIcon } from '../asset/logo/gmail-cropped.svg'

import { LogoLink } from './ui'

export const OnlySocialLogo = ({size, fill}:{size:number,fill:string}) => {
  return (
    <Box sx={{display:'flex'}}>
        <LogoLink to='https://www.facebook.com/raval.nomenjanahary' logo={<FacebookIcon width={size} height={size} fill={fill}/>}/>
        <LogoLink to='https://x.com/realXRAVAL' logo={<XIcon width={size} height={size} fill={fill}/>} />
        <LogoLink to='https://www.linkedin.com/in/fenomanana-nomenjanahary' logo={<LinkedinIcon  width={size} height={size} fill={fill}/>}/>
        <LogoLink to='https://github.com/FenomananaN' logo={<GithubIcon width={size} height={size} fill={fill}/>}/>
        <LogoLink to='https://gitlab.com/FenomananaR' logo={<GitLabIcon width={size} height={size} fill={fill}/>}/>
    </Box>
  )
}

import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import resumeData from '../../utils/resumeData';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterLeft'> <Typography className='FooterName'>{resumeData.name}</Typography></div>
      <div className='FooterRight'> 
        <Typography className='FooterCopyRight'>Developed by <a href='/' target='_blank'> Muhammad Abdullah</a>
        <br/>
        Clone Idea From <a href='https://themeforest.net/user/tavonline' target='_blank'> TavOnline</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer

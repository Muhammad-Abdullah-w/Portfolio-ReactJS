import React from 'react'
import './Button.css'
import { Button } from '@mui/material'

const CustomButton = ({text,icon,onClick}) => {
  return (
    <div>
      <Button className='site_btn' endIcon={icon ? (<div className='icon_container'> {icon}</div>) : null} onClick={onClick}>
      <span className='btn_text'>{text}</span> 
      </Button>
    </div>
  )
}

export default CustomButton;

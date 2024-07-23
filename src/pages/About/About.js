import resumeData from '../../utils/resumeData'
import './About.css';
import React from 'react'
import { Grid, TextField } from '@mui/material'
import {Typography} from '@mui/material'
import CustomButton from '../../components/Button/Button'

const About = () => {
  return (
    <div>
      {/*About Me*/}
    <Grid container className='section pb_45' spacing={2}> 
      <Grid item className='section_title '>

        <span></span>
        <h6 variant='h6' className='section_title_text'> About me </h6>
      </Grid>
      <Grid item xs={12} variant='body2'>
        <br/>
        <Typography className='AboutmeText'>
          {resumeData.About}
        </Typography>
        </Grid> 
        
    </Grid>
    {/*Contact*/}
    <Grid container className='section pb_45' spacing={2} justify="center" >
      
      
      <Grid item sm={12} md={6} className='experience'>
        <Grid container>
          <Grid item className='section_title mb_30' >
        <span></span>
        <h6 className='section_title_text'>Contact Information</h6>
          </Grid>

          <Grid item xs={12}>
        <Grid container spacing={2} style={{display:'inline-flex !important' }}>
          <Grid item>
            <Typography className='ContactInfo'> 
              <span>Address: </span>{resumeData.Address}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className='ContactInfo'> 
              <span>Phone: </span>{resumeData.Botim}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className='ContactInfo'> 
              <span>WhatsApp/Botim </span>{resumeData.Botim}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className='ContactInfo'> 
              <span>Email: </span>{resumeData.Email}
            </Typography>
          </Grid>
        </Grid>

          </Grid>
          
          <Grid item xs={12} >
            <br/>
            <Grid container>

              {Object.keys(resumeData.socials).map(key => (
                <Grid item className='info_social'>

                  <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </Grid>

    </div>
  )
}

export default About

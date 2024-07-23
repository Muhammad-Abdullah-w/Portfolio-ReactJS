import React from 'react'
import './Resume.css'
import { Grid, Paper, TextField } from '@mui/material'
import {Typography} from '@mui/material'
import resumeData from '../../utils/resumeData'
import CustomTimeline from '../../components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'

const Resume = () => {
  return (
    <>
    
    {/*Work Experience and education*/}
    <Grid container className='section'>
        <Grid item className='section_title mb_30'>
        <span></span>
        <h6 variant='h6' className='section_title_text'> Resume </h6>
        </Grid> 

        {/* Experience*/ }
        <Grid item xs={12} >
          <Grid container>
            
            <Grid item sm={12} md={6} className='experience'>
              <CustomTimeline title={'Work Experience'} icon={<WorkIcon/>}>
              {resumeData.experiences.map(experience => (
                <TimelineItem className='TS2'>
                  <TimelineSeparator className='T'>
                    <TimelineDot className={'timeline_dot_header2'}>
                      

                    </TimelineDot>
                    <TimelineConnector/>
                      
                  </TimelineSeparator>
                  
                  <TimelineContent>
                    <Typography className='timeline_title'>{experience.title}</Typography>
                    <Typography className='timeline_company'>{experience.company}</Typography>
                    <Typography variant="caption" className='timeline_date'>{experience.date}</Typography>
                    <Typography variant="body2" className='timeline_description'>{experience.Description}</Typography>
                  </TimelineContent>

                </TimelineItem>
              ))}
              </CustomTimeline>
            </Grid>
             {/* Education*/ }
             <Grid item sm={12} md={6} className='experience'>
              <CustomTimeline title={'Education'} icon={<SchoolIcon/>}>
              {resumeData.education.map(edu => (
                <TimelineItem className='TS2'>
                  <TimelineSeparator className='T'>
                    <TimelineDot className={'timeline_dot_header2'}>
                      

                    </TimelineDot>
                    <TimelineConnector/>
                      
                  </TimelineSeparator>
                  
                  <TimelineContent>
                    <Typography className='timeline_title'>{edu.title}</Typography>
                    <Typography className='timeline_company'>{edu.institute}</Typography>
                    <Typography variant="caption" className='timeline_date'>{edu.date}</Typography>
                    <Typography variant="body2" className='timeline_description'>{edu.Grade}</Typography>
                  </TimelineContent>

                </TimelineItem>
              ))}
              </CustomTimeline>
            </Grid>
            
          </Grid>
        </Grid>
    </Grid>
    <br/><br/>
    {/*Services*/}
    <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
        <span></span>
        <h6 variant='h6' className='section_title_text'> My Services </h6>
        </Grid> 
        <Grid item xs={12} >
          <Grid container  >
            {resumeData.services.map(serv => (
                
                <Grid item xs={12} sm={6} md={3}>
                  <div className='services'>
                    <iconClasses className="service_icon">{serv.icon}</iconClasses>
                    <Typography className='service_title' variant='h6'>{serv.title}</Typography>
                    <Typography className='service_description' variant='body2'>{serv.description}</Typography>
                  </div>
                </Grid>
                
                ))}
            
          </Grid>
        </Grid>
    </Grid>

    {/*Skills*/}
    <Grid container className='section'>
        <Grid item className='section_title mb_30'>
        <span></span>
        <h6 variant='h6' className='section_title_text'> My Skills </h6>
      </Grid>
      
    <Grid container className=' section raybg pb_45' spacing={3} justify="space" >
          <Grid item xs={12}>
                <Grid container justifyContent="Center" spacing={3}>
                {resumeData.skills.map(skill => (
                  <Grid item xs={12} sm={6} md={3} className='skills'>
                  <Paper elevation={0}>
                  <Typography variant='h6' className='skills_title'>
                {skill.title}
              </Typography>
              {skill.description.map(element => (
              <Typography variant='body2' className='skill_description'>
                <TimelineDot variant='outlined' className='TimelineDot'/>
                {element}
              </Typography>
            ))}
          </Paper>
          </Grid>
      ) )}

                </Grid>
          </Grid>
      
    </Grid>
    
    </Grid>

    <Grid container className='section'></Grid>
    </>
  )
}

export default Resume

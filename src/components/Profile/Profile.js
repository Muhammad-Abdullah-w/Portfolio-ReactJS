import React from 'react'
import Typography from '@mui/material/Typography';
import './Profile.css'
import CustomTimeline from '../Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import { PersonOutlineOutlined } from '@mui/icons-material';
import {  TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { GetApp } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import CustomButton from  '../Button/Button';

const CustomTimelineItem = ({title, text, link}) => {
  return(
       <TimelineItem className='TS2'>
        <TimelineSeparator className='T'>
          <TimelineDot className={'timeline_dot_header2'} > 
        
          <SvgIcon style={{ display: 'none' }}>
          <PersonOutlineOutlined />
        </SvgIcon>

          </TimelineDot>
          <TimelineConnector />
          
        </TimelineSeparator>

          <TimelineContent className='TimelineContent'>
            {link ? (<Typography className='TimelineItem_text'><span> {title}: </span> <a href={link} target='_blank' > {text}</a> </Typography>): (
              <Typography className='TimelineItem_text'> <span> {title}: </span> {text} </Typography>
            )}
            
            </TimelineContent>
          
        </TimelineItem>
  )
};

const Profile = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/cv.pdf'; // Replace 'resume.pdf' with your file name
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <div className="profile container-Shadow">
    
      <div className='profileName'> 
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
    
      <div className="profileImage">
        <figure>
          <img src={require('../../objects/pictures/profile.jpg')} alt='something'/>
        </figure>
      </div>
    
      <div className='ProfileInformation'>
        <CustomTimeline icon={<PersonOutlineOutlined/>} />
        <CustomTimelineItem  title={'Name'} text={resumeData.name}/>
        <CustomTimelineItem  title={'Birthday'} text={resumeData.birthday}/>
        <CustomTimelineItem  title={'Email'} text={resumeData.Email}/>
        
        {/*{Object.keys(resumeData.socials).map((key)=> (
          <CustomTimelineItem title={key} text={resumeData.socials[key].text } link={resumeData.socials[key].link}  />
        ))}*/}
        <div className='buttonContainer' style={{display:'flex'}}>
          <CustomButton className="customButton" text={'Download CV'} icon={<GetApp/> } onClick={handleDownload} />
        </div>
      </div>
    
    </div>
  )
}

export default Profile;

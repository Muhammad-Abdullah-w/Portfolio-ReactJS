import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';


import './Timeline.css';
import { Typography } from '@mui/material';

const CustomTimeline = ({title, icon,children}) => {
  return (
    <div>
      <Timeline className={'timeline'}>

        <TimelineItem className={'timeline_1stItem'}>
        <TimelineSeparator >
        <TimelineDot  className={'timeline_dot_header'} >  
        {icon}
        </TimelineDot>
        <TimelineConnector />
        </TimelineSeparator>
        
          <TimelineContent variant='h6' className='timeline_header'>
            <Typography >
              {title}
            </Typography></TimelineContent>
        </TimelineItem>

        {children}

       
      </Timeline>
    </div>
  );  
};



export default CustomTimeline;

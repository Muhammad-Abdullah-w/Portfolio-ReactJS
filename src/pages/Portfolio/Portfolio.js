import React, { useState } from 'react';
import './Portfolio.css';
import { Grid, Tabs, Tab, CardActionArea, CardMedia, CardContent, Typography, Grow, Dialog, DialogTitle, DialogContent, DialogActions, Card } from '@mui/material';
import resumeData from '../../utils/resumeData';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(null);

  return (
    <Grid container className='section pb_45'>
      <Grid item xs={12} className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12} container justifyContent='center'>
        <div className='tabs-container'>
          <Tabs
            value={tabValue}
            indicatorColor='primary'
            className='custom_tabs'
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label='All'
              value='All'
              className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'}
            />
            {[...new Set(resumeData.certificates.map(item => item.tag))].map((tag, index) => (
              <Tab
                key={index}
                label={tag}
                value={tag}
                className={tabValue === tag ? 'customTabs_item active' : 'customTabs_item'}
              />
            ))}
          </Tabs>
        </div>
      </Grid>
      
      {/* Details */}
      <Grid item xs={12}>
        <br/>
        <Grid container spacing={2}>
          {resumeData.certificates.map((item, index) => (
            (tabValue === item.tag || tabValue === 'All') && (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Grow in timeout={1000}>
                  <Card className='customCard' onClick={() => setProjectDialog(item)}>
                    <CardActionArea>
                      <CardMedia className='customCardImage' image={item.image} />
                      <CardContent>
                        <Typography className='customCardDescription'>{item.caption}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            )
          ))}
        </Grid>
      </Grid>
      
      {/* Dialog */}
      <Dialog className='projectDialog' maxWidth={'lg'} open={Boolean(projectDialog)} onClose={() => setProjectDialog(null)}>
        <DialogTitle>
          {projectDialog?.title}
        </DialogTitle>
        {projectDialog && (
          <>
            <DialogContent>
              <img alt={projectDialog.title} src={projectDialog.image} style={{ width: '100%' }} className='projectDialogImage' />
              <Typography>{projectDialog.description}</Typography>
            </DialogContent>
            <DialogActions className='projectDialog_actions'>
              {projectDialog.links?.map((link, index) => (
                <a className='projectDialogIcon' key={index} href={link.link} target='_blank' rel='noopener noreferrer'>
                  {link.icon}
                </a>
              ))}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Grid>
  );
};

export default Portfolio;

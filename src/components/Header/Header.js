import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormControl,Form } from 'react-bootstrap';
import Button from 'react-bootstrap';
import {link, NavLink} from 'react-router-dom';

import { HomeRounded, Telegram } from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css'
const Header = (props) => {
  const pathname = props?.location?.pathname;
  const handleClick = () => {
    alert("Contact me at: theabdullah.office@gmail.com")
  };
      return (
        <Navbar expand="lg" sticky='top' className='header'>
          <Nav.Link as ={NavLink} to ='/' className='header_NavLink' >
          <Navbar.Brand className='header_home'>
            <HomeRounded />
          </Navbar.Brand>
          </Nav.Link>
          
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className='header_left'>
            <Nav.Link as ={NavLink} to ='/' className={pathname == '/' ? 'header_link_active' : 'header_link'} ></Nav.Link>
            <Nav.Link as ={NavLink} to ='/Resume' className={pathname == '/Resume' ? 'header_link_active' : 'header_link'} >Resume</Nav.Link>
            <Nav.Link as ={NavLink} to ='/Portfolio' className={pathname == '/Portfolio' ? 'header_link_active' : 'header_link'} >Portfolio</Nav.Link>
            </Nav>
            <div className='header_right'>

            {Object.keys(resumeData.socials).map((key)=> (
          <a href={resumeData.socials[key].link} target='_blank'>{resumeData.socials[key].icon} </a> 
        ))}<CustomButton text='Hire Me' icon={<Telegram/>} onClick={handleClick} />
        
            </div>
          </Navbar.Collapse> 
        </Navbar>
        
      );
    }

export default (Header)

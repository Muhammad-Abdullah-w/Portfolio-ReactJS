import { Container, Grid } from '@mui/material';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import './App.css';
import resumeData from './utils/resumeData';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';

import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <Container className='main'>
      <Grid container spacing={7}>
      
        <Grid item xs={12} sm={12} md={4} lg={3}  > 
          <Profile /> 
        </Grid>

        <Grid item xs >
        <BrowserRouter>
          <Header/>
          
          <div className='main-content'> 
            <Routes>
            <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />        
            </Routes>
            </div>
          </BrowserRouter>
          
          <Footer/>
          <Button/>
        </Grid>
     
      </Grid>
    </Container>
  );
}

export default App;

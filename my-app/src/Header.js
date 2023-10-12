import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

function Header() {
  return (
    // BEM
    <div className='header'>
      <PersonIcon fontSize='large'/>
     <img 
     className='header__logo'
     src="https://i.pinimg.com/736x/d4/d8/82/d4d882dccd11187b7980ada01a465d48.jpg" 
     alt="tinder logo" 
     />
     <ModeCommentIcon fontSize='large' />
    </div>
  )
}

export default Header
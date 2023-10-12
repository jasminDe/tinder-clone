import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

function Header() {
  return (
    // BEM
    <div className='header'>
      <PersonIcon />
     <h2>I am a header</h2>
     <ModeCommentIcon />
    </div>
  )
}

export default Header
import React from 'react';
import linkedinIcon from '../images/linkedin.svg';
import github from '../images/github.svg';
import gmail from '../images/gmail.svg';


function ContactInfo() {
  return (
    <footer>
    
      <p>Contact me:</p>
      <div className="contact-list">
        
        <a href="https://www.linkedin.com/in/virginia-wanjiru-0852641b0/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn Icon" style={{ width: '30px', height: '50px' }} />
        </a>

        <a href="https://github.com/VirginiaWanjiru" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src={github} alt="GitHub Icon" style={{ width: '30px', height: '50px' }} />
        </a>
        
        <div>
          <img src={gmail} alt="Gmail Icon" style={{ width: '30px', height: '50px' }} />
          <h3>virginiachristine55@gmail.com</h3>
        </div>
      </div>
      <p>&copy; 2024 Virginia's Wang'ang'a</p>
      </footer>
   
    
  );
}

export default ContactInfo;

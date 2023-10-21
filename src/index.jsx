import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Facebook, Instagram, Github, Linkedin, PersonBadgeFill } from 'react-bootstrap-icons';
import profileImage from './image/Profile.jpg';

function Hi() {
  return (
    <div>
      <div className='pro-card'>
        
        <img src={profileImage} alt="" />

        <h3>Muhammad Anas Khan</h3>
        <p>I'm a Passionate Front-end Developer</p>

        <a href="https://www.facebook.com/Anaskhancodes/"><div className='social-media'><Facebook className='icons' /> <h1>Facebook</h1> </div></a>
        <a href="https://www.instagram.com/anaskhan_codes/"> <div className='social-media'><Instagram className='icons' /> <h1>Instagram</h1></div></a>
        <a href="https://github.com/anaskhancodes"><div className='social-media'><Github className='icons' /> <h1>GitHub</h1></div></a>
        <a href="https://www.linkedin.com/in/muhammadanaskhancodes/"><div className='social-media'><Linkedin className='icons' /> <h1>Linkedin</h1></div></a>
        <a href="https://react-resume-cv-rcox.vercel.app/"><div className='social-media'><PersonBadgeFill className='icons' /> <h1>Resume</h1></div></a>
      </div>


    </div>
  )

}


ReactDOM.render(<Hi />, document.querySelector('#root'));
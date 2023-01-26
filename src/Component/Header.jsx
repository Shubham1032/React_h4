import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
        
        <nav>
            <Link to='/'>
            <div className='navContect' id='home'>  Home </div></Link>
            <Link  to='/StudentTable'><div className='navContect' id='Students'>Students</div></Link>
            <Link  to='/Contact'><div className='navContect' id='Contact'>Contact Us</div></Link>
        </nav>

    </div>
  )
}

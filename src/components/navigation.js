import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">
                            Menu
                        </div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                    <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Get in touch</li>
                <li>
                 
                    <a href = "mailto:rashideram2@gmail.com">
                    Email Me
                    </a>
             
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Based in</li>
                <li>Dhaka, Bangladesh</li>

              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Twitter</li>
                <li><a href="https://twitter.com/itslaserunicorn">@thelaserunicorn</a></li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Curriculum Vitae</li>
                <li><a href="/">Click Here!</a></li>
              </ul>
            </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

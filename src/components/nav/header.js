import { NavLink } from 'react-router-dom'
import React from 'react'

const Header = () => {
    return (
        <div className='nav'>
            <div className='title'>
                Buddy Finder
            </div>
            <div className='links'>
                <nav>
                    <NavLink className='homeBtn' to='/'>Home</NavLink>
                    <NavLink className='addYourBuddyBtn' to='/addbuddy'>Add Your Buddy</NavLink>
                    <NavLink className='yourBuddiesBtn' to='/yourbuddies'>Your Buddies</NavLink>
                    <NavLink className='aboutUsBtn' to='/aboutus'>About Us</NavLink>
                    <NavLink className='authBtn' to='/auth'>Login/Register</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;
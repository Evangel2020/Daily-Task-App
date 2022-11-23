import React, {useState} from 'react'
import {MdDarkMode} from 'react-icons/md';
import {MdOutlineDarkMode} from 'react-icons/md';
import {Link} from 'react-router-dom'
import "./home.css"

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={isClicked ? "container clicked" : "container notclicked"}>
        <div className='navigation'>
            <div className='nav-logo'>
            <h1>Todo List</h1>
            </div>
            <nav className='nav-bar'>
                <MdDarkMode  onClick={() => setIsClicked(!isClicked)} className='darkmode-icon view'/>
                <MdOutlineDarkMode onClick={() => setIsClicked(!isClicked)}  className='lightmode-icon view'/>
            </nav>
        </div>

        <div className='hero-section'>
            <h2>Hi👋</h2>
            <p>Welcome</p>
            <span>Record your daily task very easy</span>
            <Link to={'/todopage'}>
            <div>
            <button className='btn'>Start your day</button>
            </div>
            </Link>
            <Link to={'/todopage'}>
            <div>
                <button className='next-btn'>
                    Next
                </button>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Home
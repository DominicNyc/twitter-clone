import React, { useEffect, useRef} from 'react';
import { TweenMax, Power3 } from 'gsap';
import logo from './Logo blue.svg';
import { Link } from 'react-router-dom';


function NavBar({ userName, setUserName, setTweetList }) {

  //! GSAP animation for side bar
  let navBar = useRef(null)
  useEffect(() => {
    TweenMax.from(navBar, 1, {opacity: -1, y: -400, ease: Power3.easeOut, delay: .5})
  },[])

  //! When you click logout it resets username and all the tweets that were typed
  const handleClick = () => {
    setUserName('');
    setTweetList([]);
  }




    return (
        <div ref={ele => navBar = ele} className="sidebar">
            <img src={logo} alt="" />
            <span>Messages</span>
            <span>Feed</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Logged in as {userName} </h3>
            <Link className='logout' to="/">
                <p onClick={handleClick}>Log Out</p>
            </Link>
            
        </div>
    )
}

export default NavBar;
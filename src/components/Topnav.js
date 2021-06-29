import React, { useEffect, useRef} from 'react';
import { TweenMax, Power3 } from 'gsap';

const Topnav = () => {

    //! Gsap animation
    let topNav = useRef(null)
    useEffect(() => {
    TweenMax.from(topNav, 1, {opacity: -1, x: -400, ease: Power3.easeOut, delay: .5})
      },[])


    return (
        <header ref={e => topNav = e} className="Topnav">
            <p>Dominic's Twitter Clone</p>

        </header>

    );
}

export default Topnav;
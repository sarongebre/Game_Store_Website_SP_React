import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import './ScrollButtonStyle.css';
const ScrollButton = () =>{

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0){
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div id="scrollbtn">
        <FaArrowCircleUp id="scrollicon" onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
        </div>
    );
}

export default ScrollButton;

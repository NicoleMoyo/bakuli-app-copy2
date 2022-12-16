import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "../styles/Slideshow.css";
import ImageOne from "../assets/SlideImageOne.svg"
import ImageTwo from "../assets/SlideImageTwo.svg"
import ImageThree from "../assets/SlideImageThree.svg"

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 4000;

const SlideOne = () => {
    return (
        <div className="slideContainer">
            <img className="slideImage" src={ImageOne} alt="slide 1"/>
            <div className="slideDesc">
                <p className="title-02-bold center-text">Food Logging</p>
                <p className="body-02-regular center-text">Log your meals on the app to keep track of your eating habits</p>
            </div>    
        </div>
    )
}

const SlideTwo = () => {
    return (
        <div className="slideContainer">
            <img className="slideImage" src={ImageTwo} alt="slide 1"/>
            <div className="slideDesc">
                <p className="title-02-bold center-text">Personalised Recommendations</p>
                <p className="body-02-regular center-text">Get food recommendations based on your eating habits.</p>
            </div>    
        </div>
    )
}

const SlideThree = () => {
    return (
        <div className="slideContainer">
            <img className="slideImage" src={ImageThree} alt="slide 1"/>
            <div className="slideDesc">
                <p className="title-02-bold center-text">Health Tips</p>
                <p className="body-02-regular center-text">Read interesting and informative articles to improve your overall wellbeing.</p>
            </div>    
        </div>
    )
}

const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => 
            setIndex((prevIndex) => 
                prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
            delay 
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

const slides = [<SlideOne />, <SlideTwo />, <SlideThree />];

    return (
        <>
        <div className="slideshow">
            <div 
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slides.map((slide, index) => (
                    <div 
                    className="slide" 
                    key={index} 
                    >{ slide }</div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div 
                    key={idx} 
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                        setIndex(idx);
                    }}
                    ></div>
                ))}
            </div>
        </div>
        {/* <div className="slideshow">
            <div 
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div 
                    className="slide" 
                    key={index} 
                    style={{ backgroundColor }}
                    ></div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div 
                    key={idx} 
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                        setIndex(idx);
                    }}
                    ></div>
                ))}
            </div>
        </div> */}
        </>
    );
}

export default Slideshow;
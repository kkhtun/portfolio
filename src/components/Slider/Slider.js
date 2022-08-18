import React, { useEffect, useRef, useState } from "react";
import * as R from "ramda";
import "./Slider.css";
import nextIcon from "../../images/experience/next.png";
const Slider = ({ slideData, SlideComponent }) => {
    const [index, setIndex] = useState(0);
    const delay = 7000;
    const timeoutRef = useRef(null);
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index, slideData]);

    return (
        <div className="slide-view">
            <div
                className="slide-container"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {R.reverse(slideData).map((item) => (
                    <div key={item.id} className="slide">
                        <SlideComponent data={item} />
                    </div>
                ))}
            </div>

            <span
                className="prev-slide"
                onClick={() =>
                    setIndex((prevIndex) =>
                        prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
                    )
                }
            >
                <img src={nextIcon} alt="prev slide" />
            </span>
            <span
                className="next-slide"
                onClick={() =>
                    setIndex((prevIndex) =>
                        prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
                    )
                }
            >
                <img src={nextIcon} alt="next slide" />
            </span>

            <div className="slide-dots">
                {slideData.map((_, idx) => (
                    <div
                        className={`slide-dot ${
                            index === idx ? "slide-dot-active" : ""
                        }`}
                        key={idx}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;

import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
const Slider = ({ slideData, SlideComponent }) => {
    const [index, setIndex] = useState(0);
    const delay = 5000;
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
                {slideData.map((item) => (
                    <div key={item.id} className="slide">
                        <SlideComponent data={item} />
                    </div>
                ))}
            </div>

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

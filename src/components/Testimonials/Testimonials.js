import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {testimonialsData.length > 0 && (
                <div className='testimonials' style={{ backgroundColor: theme.secondary }}>
                    <div className='testimonials--header'>
                        <h1 style={{ color: theme.primary }}>Gallery</h1>
                    </div>
                    <div className='testimonials--body'>
                        <div className='testimonials--slider' style={{ color: theme.primary }}>
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div className='single--testimony' key={test.id}>
                                        <div className='review--img' style={{ backgroundColor: theme.primary }}>
                                            <img src={test.image} alt={test.name} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button className='prevBtn' onClick={gotoPrev} style={{ backgroundColor: theme.primary }}>
                                <FaArrowLeft style={{ color: theme.secondary }} aria-label='Previous testimonial' />
                            </button>
                            <button className='nextBtn' onClick={gotoNext} style={{ backgroundColor: theme.primary }}>
                                <FaArrowRight style={{ color: theme.secondary }} aria-label='Next testimonial' />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;

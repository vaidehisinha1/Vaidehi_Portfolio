import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import AboutPhoto from '../../assets/6.jpg';

function About() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary, textAlign: 'justify'}}>
            <div className="line-styling">
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={AboutPhoto}
                        alt="About Me Photo" 
                    />
                </div>
            </div>
        </div>
    )
}

export default About;

import React,{useContext} from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, organization,date, icon, description}) {

    const { theme } = useContext(ThemeContext);
    return (
        <Fade bottom>
            <div key={id} className="single-service" style={{backgroundColor:theme.primary400}}>
                <div className="service-content"  style={{color:theme.tertiary, opacity:1}}>
                    <img src={icon} className="service-icon"></img>
                    <h2 style={{color:theme.tertiary}}>{title}</h2>  
                    <h3 style={{color:theme.secondary}}>{date}</h3>
                    <p style={{color:theme.tertiary}}>{organization}</p>
                    
                </div>         
                <div className='description' style={{ opacity:1}}>
                    <p style={{color:theme.tertiary80, fontFamily:"Poppins", textAlign:'justify', padding:'10px'}}>{description}</p>
                </div>
            </div>
        </Fade>
    )
}

export default SingleService

import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({id, title, details, date, field, image}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
               <div className="achievecard-content">
               <div className="achievecard-details2" style={{color: theme.primary}}>
                        
                        <div className="achievecard-field">
                            {/* <AiOutlineFolder /> */}
                            <h5>{field}</h5>
                        </div>   
                    </div>
                    <div className="achievecard-details1">
                        
                        <h2 style={{color: theme.tertiary}}>{title}</h2>
                        <h5 class="date" style={{color: theme.primary}}>{date}</h5>
                        <p style={{color: theme.tertiary80,fontFamily: 'Poppins', fontSize:'1rem', textAlign:'justify'}}>{details}</p>
                    </div>
                   
                </div> 
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>
           </div>
        </Fade>
        
    )
}

export default AchievementCard

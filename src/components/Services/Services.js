import React,{useContext} from 'react';
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext';
import { HiArrowRight } from "react-icons/hi";
import { servicesData } from '../../data/servicesData';
import { makeStyles } from '@material-ui/core/styles';

import './Services.css'
import SingleService from './SingleService/SingleService';

function Services() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {servicesData.length > 0 && (
                <div className="services" id="leadership" style={{backgroundColor:theme.secondary}}>
                    <div className="services-header">
                        <h1 style={{color: theme.primary}}>Leadership Roles</h1>
                    </div>
                    <div className="services-body">
    
                        <div className="services-bodycontainer">
                            {servicesData.slice(0,3).map(services => (
                                <SingleService
                                key={services.id}
                                id={services.id}
                                title={services.title}
                                date={services.date}
                                organization={services.organization}
                                description={services.desc}
                                icon={services.icon}/>
                            ))}
                        </div>
                    </div>
                    <div className="achievements--viewAll">
                                <Link to="/leaderships">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                </div>
                </div>
            )}
       </>
    )
}

export default Services

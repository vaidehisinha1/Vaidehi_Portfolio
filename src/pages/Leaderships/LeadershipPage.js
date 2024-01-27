import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './LeadershipPage.css';
import { SingleService } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { servicesData } from '../../data/servicesData';
import { headerData } from '../../data/headerData';

function LeadershipPage() {

    const [search, setSearch] = useState('');
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        search : {
            color: theme.tertiary, 
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',  
            backgroundColor: theme.secondary, 
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80, 
            },
            [t.breakpoints.down('sm')]: {
                width:'350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 75,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));


    const classes = useStyles();

    // Splitting servicesData into present and past roles
    const presentRoles = servicesData.slice(0, 4);
    const pastRoles = servicesData.slice(4);

    return (
        <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Leadership</title>
            </Helmet>
            <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Leadership Roles</h1>
            </div>
            <div className="projectPage-container">
                <div className="services-body">
                    <h1 style={{ color: theme.primary, marginBottom: '1rem' }}>Present Roles</h1>
                    <div className="services-bodycontainer">
                        {presentRoles.map(service => (
                            <SingleService
                                key={service.id}
                                id={service.id}
                                title={service.title}
                                date={service.date}
                                organization={service.organization}
                                description={service.desc}
                                icon={service.icon} />
                        ))}
                    </div>
                    {pastRoles.length > 0 && (
                        <>
                            <h1 style={{ color: theme.primary, marginTop: '2rem', marginBottom: '1rem' }}>Past Roles</h1>
                            <div className="services-bodycontainer">
                                {pastRoles.map(service => (
                                    <SingleService
                                        key={service.id}
                                        id={service.id}
                                        title={service.title}
                                        date={service.date}
                                        organization={service.organization}
                                        description={service.desc}
                                        icon={service.icon} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeadershipPage;

import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './AchievementsPage.css'
import { AchievementCard, SingleAchievement } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import { headerData } from '../../data/headerData'

function AchievementsPage() {

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    // const filteredArticles = projectsData.filter((project) => {
    //     const content = project.projectName + project.projectDesc + project.tags
    //     return content.toLowerCase().includes(search.toLowerCase())
    // })

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

    return (
        <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Achievements</title>
            </Helmet>
            <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Achievements</h1>
            </div>
            <div className="projectPage-container">
                {/* <div className="projectPage-search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search achievement..." className={classes.search} />
                </div> */}
                <Grid container spacing={2} className="project-container">
                    {achievementData.achievements.map((achieve, index) => (
                        <Grid key={achieve.id} item xs={12} sm={6}>
                            <AchievementCard
                                id={achieve.id}
                                title={achieve.title}
                                details={achieve.details}
                                date={achieve.date}
                                field={achieve.field}
                                image={achieve.image}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )


}

export default AchievementsPage

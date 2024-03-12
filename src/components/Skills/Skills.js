import React from 'react'
import classes from './Skills.module.css'
import { Fragment } from 'react'
const Skills = () => {
    return (
        <Fragment>
            <div className={classes.wrapper}>
            <div className={classes.heading} id='Skills'>
                <h1>
                    Skills
                </h1>
            </div>
            <div className={classes.skills}>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-html5"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-css3-alt"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-js"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-react"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-node"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-solid fa-database"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-php"></i>
                </div>
            </div>
        </div>
        </Fragment >
    )
}

export default Skills;

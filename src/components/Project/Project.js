import React from 'react'
import classes from './Project.module.css';
import { Projects } from '../../data/projects';
const Project = () => {
    return (
        <div className={classes.project} id='Project'>
            <div className={classes.heading}>
                <h1>PROJECT</h1>
            </div>
            <div className={classes.projectinfo}>
                {Projects.map((project, index) => {
                    if (index >= 10) return <></>
                    return <div className={classes.box}>
                        <img src={project.image_path} alt="" />
                        <div className={classes.content}>
                            <div className={classes.tag}><h3>{project.name}</h3></div>
                            <div className={classes.desc}>
                                <p>{project.desc}</p>
                                <div className={classes.btns}>
                                    <a href={project.production_link} class={classes.btn}><i class="fas fa-eye"></i> View</a>
                                    <a href={project.github_link} class={classes.btn} > <i class="fas fa-code"></i>Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {Projects.length >= 10 && <button>View All</button>}
        </div>
    )
}

export default Project

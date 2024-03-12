import classes from './Education.module.css';
import ldrp from '../assets/ldrp.avif'
import krishna from '../assets/krishna.jpeg'
import carmel from '../assets/carmel.jpeg'
const Education = () => {
    return (
        <div className={classes.education} id="Education" >
            <div className={classes.heading}>
                <h1>Education</h1>
            </div>
            <div className={classes.educationpart}>
                <div className={classes.info}>
                    <div className={classes.aimg}><img src={ldrp} alt="" /></div>
                    <div className={classes.about}>
                        <h2>LDRP-ITR</h2>
                        <p>B.E. in Computer Engineering |  8.52 CPI
                            {/* Bechelor of Engineering in Computer Engineering */}
                        </p>
                        <span>2020-2024 | Pursing</span>
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.aimg}><img src={krishna} alt="" /></div>
                    <div className={classes.about}>
                        <h2>Krishna School of science

                        </h2>
                        <p> PCM | 67%</p>
                        <span>2018-2020 | Completed</span>
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.aimg}><img src={carmel} alt="" /></div>
                    <div className={classes.about}>
                        <h2>Mount Carmel High School Gandhinagar
                        </h2>
                        <p>Ssc | 87%</p>
                        <span>2016-2018 | Completed</span>
                    </div>
                </div>
                {/* <div className={classes.info}>
                    <div className={classes.aimg}><img src={krishna} alt="" /></div>
                    <div className={classes.about}>
                        <h2>Bechelor of Engineering in Computer Engineering
                            HSC Science | Informatic Practices
                        </h2>
                        <p>Krishna School of science</p>
                        <span>2018-2020 | Completed</span>
                    </div>
                </div> */}
            </div>
        </div>)
}

export default Education;
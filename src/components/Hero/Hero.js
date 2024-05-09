import profile from '../assets/p5.jpg';
import classes from './Hero.module.css';
import { Fragment } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Resume } from '../../data/projects';

const Hero = () => {
    return (
        <Fragment>
            <div className={classes.hero} id="About">
                <div className={classes.left}>
                    <div className={classes.pic}>
                        <img src={profile} alt="" className={classes.profile} />
                    </div>
                </div>
                <div className={classes.right}>
                    <h1>
                        PRIYANSHU PRAKASHBHAI THAKAR</h1>

                    <h3>
                        <TypeAnimation
                            sequence={["Hi,I am devloper.", 1000, "I am Creative.", 1000, "I am Quick learner.", 1000, "I Love to Develop.", 1000,]} speed={1} repeat={Infinity} style={{ fontSize: '2em', color: '#00ABE4' }} />
                    </h3>
                    <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                    </p>
                </div>
                <div className={classes.end}>
                    <a href="https://github.com/priyanshuthakar24"><i class="fa-brands fa-square-github" style={{ color: '#253f4b' }}></i></a>
                    <a href="https://www.linkedin.com/in/priyanshu-thakar-3b1547274"><i class="fa-brands fa-linkedin" style={{ color: '#253f4b' }}></i></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlHkHwFZJFMMpdQsRXPjXZpDHFgHQGSCrFnwSzBnQtGRrTjhvWCWlbQbqbzcBGnJjwnvV"><i class="fa-solid fa-envelope" style={{ color: '#253f4b' }}></i></a>

                    <a href="https://github.com/priyanshuthakar24"><i class="fa-brands fa-square-instagram" style={{ color: '#253f4b' }}></i></a>
                    {Resume.map(resume =>
                        <a href={resume.resume_link} download='Priyanshu_Thakar_Resume' id={classes.resume} ><i class="fa-solid fa-file-user" style={{ color: '#253f4b'}}></i></a>
                    )}
                </div>
            </div>
        </Fragment>
    )
}
export default Hero;
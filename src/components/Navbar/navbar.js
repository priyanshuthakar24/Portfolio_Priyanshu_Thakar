import classes from './Navbar.module.css';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Navbar = () => {
    const [activestate, setactivestate] = useState(false);
    const menuhandler = () => {
        console.log('clicked')
        setactivestate(true);
    }
    const closehandler = () => {
        setactivestate(false);
    }
    window.onscroll = () => {
        setactivestate(false);
    }


    return (
        <div className={classes.Navbar}>
            <div className={classes.logo}> <TypeAnimation sequence={["<Priyanshu / Thakar >", 10,]} speed={10} /> </div>
            <div className={classes.navbar}>
                <ul className={`${classes.navbar}  ${activestate ? classes.active : ''}`} >
                    <a href="#close" id={classes.close} onClick={closehandler}><i class="fa-solid fa-circle-xmark"></i></a>
                    <li><a href="#About" >About</a> </li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Education">Education</a></li>
                </ul>
            </div>
            <div id={classes.mobile} onClick={menuhandler}>
                <i class="fa-solid fa-bars fa-beat"></i>
            </div>
        </div>)
}

export default Navbar;

// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');
// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.toggle('active');
//     })
// }
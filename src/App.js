import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Project />
    </Fragment>
  );
}

export default App;

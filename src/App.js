import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experience from './components/Experience'
function App() {
  return (


    <div className="App">

      <Navigation/>
      
       <Home />
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>      
    </div>
  );
}

export default App;

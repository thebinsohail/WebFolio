import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (


    <div className="App">
      
      <Navigation/>
      
       <Home />
      <About/>
      <Skills/>
      
    </div>
  );
}

export default App;

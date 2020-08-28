import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home />
    </div>
  );
}

export default App;

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import TopBar from './components/TopBar'
import Background from './components/Background'
import DropDown from './components/DropDown'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <div className="App">
      <TopBar />
      <Background />
      <DropDown />
    </div>
    
  );
}

export default App;

import React, { Component } from 'react';
import Mavbar from "./components/Navbar/Navbar";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Tourlist from './components/TourList';

class App extends Component {
 
  render() {
      return(
          <main>
            <Navbar />
            <Tourlist />
          </main>
      );
  }  
}
export default App;

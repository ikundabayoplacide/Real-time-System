import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import './shop.css'
import fluits2 from './fluits2.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDress,faBasketShopping, faSearch} from '@fortawesome/free-solid-svg-icons';

 class App extends Component {
  render() {
    return (
      <div>
       <div className='nav'>
        <p><span>A</span>KIRA</p>
          <button>Home</button>
          <button>Shop</button>
          <button>Blog</button>
          <button>Pages</button>
          <button>Elementor_live</button>
          <button>Buy</button>
        <div className='icon'>
        <FontAwesomeIcon icon={faSearch} className='icons'/>
        <FontAwesomeIcon icon={faBasketShopping} className='icons'/>
        <FontAwesomeIcon icon={faPersonDress} className='icons'/>
        </div>
       </div>
       {/* this above is the end of navigatio */}
       <div className='main'>
       <pra>Healthy delicious meals <br></br>
        delivered right to your door<br></br>
        <span>Color your day with Goodness</span></pra>
       <img src={fluits2} className='img'/>
       </div>
       <div className='btn'><p> Enter your Address to Check If you we're Available at your Region</p></div>
      </div>
    )
  }
}

export default App


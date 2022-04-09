import React, { Component } from 'react'

export class Navbar extends Component {


  render() {
    return (
      <div className='pb-12'>
        <header className={`flex justify-between items-center bg-white text-white py-5 px-8 shadow-md transition duration-200`}>
          <h2 className={`uppercase font-bold text-xl text-black`}>NewsMonkey</h2>
          <ul className='flex gap-8'>
            <li><a href="/" className={`text-black transition duration-200`}>Home</a></li>
            <li><a href="/" className={`text-black transition duration-200`}>Shop</a></li>
            <li><a href="/about" className={`text-black transition duration-200`}>About</a></li>
            <li><a href="/" className={`text-black transition duration-200`}>Contact</a></li>
          </ul>
      </header>
      </div>
    )
  }
}

export default Navbar

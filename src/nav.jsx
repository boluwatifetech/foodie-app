import React,{useRef}  from 'react'
import {Link} from 'react-router-dom'
import './main.css'
import {FaBars,FaTimes} from 'react-icons/fa'

function Nav(){
    const navRef=useRef()
    const handleClose=()=>{
        navRef.current.classList.toggle('dislocate-nav')
    }
    return(
        <header>
        <h1>feed <span>me</span></h1>
        <nav ref={navRef}>
        <ul>
          <li><Link to='/home' className='inside-nav'>home</Link></li>
     <li><Link to='/localfood' onClick={handleClose}className='inside-nav'>local food</Link></li>
          <li>  <Link to='/foreignfood' onClick={handleClose}className='inside-nav'>foreign food</Link></li>
          <li>  <Link to='/snacks' onClick={handleClose}className='inside-nav'>snacks</Link></li>
            </ul>
            <FaTimes className='btn close' onClick={handleClose}/>
         </nav>
             <FaBars className='btn open' onClick={handleClose}/>
        </header>
    )
}

export default Nav
import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assest/crown.png';
import cart from '../Assest/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItem} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src={logo} alt="crown" />
        <p>CROWN</p>
      </div>
      <h1 className='nav-dropdown' onClick={dropdown_toggle} >☰</h1>
      <ul ref={menuRef} className='Nav_manu'>
        <li onClick={()=> {setMenu("shop")}}><Link className='links' to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("mens")}}><Link className='links' to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>} </li>
        <li onClick={()=> {setMenu("womens")}}><Link className='links'  to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("kids")}}><Link className='links'  to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
      </ul>
      
      <div className='Nav_login'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className='Nav_cart_count'>{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar
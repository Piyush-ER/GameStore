import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth'
import './Navbar.css'

const Navbar = ()=>{
    const {cart} = useCart()
    const {auth} = useAuth()
    console.log(cart);
    return(
        <header className='header'>
            <div className="link-container">
                <h1>10X Game Store</h1>
                <nav className='navbar'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </div>
            {auth?.token && <div className="cart-display">
                <Link to={'/cart'}><span className="cart-icon"></span></Link>
                <span className="cart-count">{cart.length}</span>
            </div>}
        </header>
    )
}

export default Navbar;
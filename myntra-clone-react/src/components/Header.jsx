import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";



export const Header = () =>{
    return<>
        <header>
        <div className="logo_container">
            <a href="#"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></a>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <span className="action_name"><CgProfile />Profile</span>
            </div>

            <div className="action_container">
                <span className="action_name"><FaHeart />Wishlist</span>
            </div>

            <a className="action_container" href="pages/bag.html">
                <span className="action_name"><IoBagHandleSharp />Bag</span>
                <span className="bag-item-count">0</span>
            </a>
        </div>
    </header>
    </>
}
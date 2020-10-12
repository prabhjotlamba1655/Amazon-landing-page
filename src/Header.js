import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import './Header.css';


function Header() {

    return <nav className="header">

        {/*logo on the left -> img */}
        <Link to="/">
            <img
                className="header__logo highlight"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo of amazon"
            />
        </Link>

        {/* Search Box*/}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        {/* 3 Links*/}
        <div className="header_Right_nav">

            {/* 1st link  of SIGNIN*/}
            <Link to="/login" className="header__link highlight">
                <div className="header__option">
                    <span className="header__optionLine1">Hello  </span>
                    <span className="header__optionLine2">Sign In</span>
                </div>
            </Link>

            {/* 2nd link of UR ORDERS */}
            <Link to="/orders" className="header__link highlight">
                <div className="header__option">
                    <span className="header__optionLine1">Returns</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>
            </Link>


            {/* 3rd link of UR PRIME */}

            <Link to="/prime" className="header__link highlight">
                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
            </Link>

            {/* Basket icon with number*/}

            <Link to="/checkout" className="header__link highlight">

                <div className="header__optionBasket">

                    {/* Shopping basket icon */}
                    <ShoppingBasketIcon />

                    {/* Number of items in the basket  */}
                    <span className="header__optionLine2 header__BasketCount">0</span>
                </div>
            </Link>

        </div>

    </nav>
}

export default Header
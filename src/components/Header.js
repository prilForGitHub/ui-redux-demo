import React from 'react';

function Header(props)
{
    console.warn("Header props : ",props.cartData)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.cartData.length}</span>
                <img src="https://icon-library.com/images/shopping-cart-icon/shopping-cart-icon-5.jpg" />
            </div>
            
        </div>
    )
}

export default Header;
import React from 'react';

function Home(props)
{
    console.warn("Home props : ",props.cartData)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.popsci.com/resizer/kQSWUdp06TXRl2eM3G5LzrRx4Iw=/1293x970/filters:focal(600x450:601x451)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VYHDQWEYQJMUBJTKNV4MMC5KMU.jpg"></img>
                </div>
                <div className="text-wrapper item">
                <span>I-Phone</span>
                <span>Price : $1000</span>
                </div>
                <div className="btn-wrapper item">
                <button onClick={()=>props.addToCartHandler({price:1000, name:'iphone'})}>
                    Add To Cart
                </button>
                <button className="remove-cart-btn" onClick={()=>props.removeFromCartHandler()}>
                    Remove From Cart
                </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
import React from 'react'
import './Api.css'


function Home({ name, symbol, imgSrc, price }) { //pass the props to use the props
    return (
        <div className='signup_forCoin'>
            <img src={imgSrc} alt={name} />
            <h2>{name}</h2>
            <p>{symbol}</p>
            <h4>₹{price}</h4>
        </div>
    )
}

export default Home

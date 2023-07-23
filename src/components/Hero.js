import React from 'react'

function Hero() {
    return (
        <header>
            <div className='hero-text'>
                <h1>Electric Elegance.</h1>
                <h4>Embrace the Future with Silent Power and Sustainable Driving Technology.</h4>
                <button class="btn"> Discover your dream ride</button>
            </div>
            <div className='hero-image'>
                <img className='hero-image' src={require('../images/car5.png')}></img>
            </div>
        </header>
    )
}

export default Hero

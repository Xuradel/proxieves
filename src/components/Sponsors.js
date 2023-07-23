import React from 'react'

function Sponsors() {
    return (
        <div className='sponsors-section'>
            <div className='sponsors-text'>
                <h6>Our sponsors</h6>
            </div>
            <div className='sponsors-logos'>
                <img src={require('../images/bmw.png')} alt='logo'></img>
                <img src={require('../images/audi.png')} alt='logo'></img>
                <img src={require('../images/mercedes.png')} alt='logo'></img>
                <img src={require('../images/nissan.png')} alt='logo'></img>
                <img src={require('../images/toyota.png')} alt='logo'></img>
                <img src={require('../images/kia.png')} alt='logo'></img>
            </div>
        </div>
    )
}

export default Sponsors

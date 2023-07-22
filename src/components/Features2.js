import React from 'react'

function Features2() {
    return (
        <div className='features-section'>
            <div className='features-image'>
                <img src={require('../images/car2.png')}></img>
            </div>
            <div className='features-text'>
                <h2>Benefits of Electric Vehicles</h2>
                <div className='features-properties'>
                    <div className='property'>
                        <img src={require('../images/torque.png')}></img>
                        <h5>Instant Torque</h5>
                        <h6>Electric motors offer immediate acceleration and responsive driving performance.</h6>
                    </div>
                    <div className='property'>
                        <img src={require('../images/noise.png')}></img>
                        <h5>Reduced Noise Pollution</h5>
                        <h6>EVs contribute to quieter streets, reducing noise pollution in urban areas.</h6>
                    </div>
                    <div className='property'>
                        <img src={require('../images/charging.png')}></img>
                        <h5>Home Charging Convenience</h5>
                        <h6>Charging at home is convenient, providing accessibility and flexibility for owners.</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features2

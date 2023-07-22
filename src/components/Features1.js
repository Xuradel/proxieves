import React from 'react'

function Features1() {
    return (
        <div className='features-section'>
            <div className='features-text'>
                <h2>Advantages of Electric Vehicles</h2>
                <div className='features-properties'>
                    <div className='property'>
                        <img src={require('../images/enviroment.png')}></img>
                        <h5>Environmental Benefits</h5>
                        <h6>EVs produce zero tailpipe emissions, reducing air pollution and greenhouse gases.</h6>
                    </div>
                    <div className='property'>
                        <img src={require('../images/cost.png')}></img>
                        <h5>Lower Operating Costs</h5>
                        <h6>EVs have lower maintenance and fuel costs compared to traditional vehicles.</h6>
                    </div>
                    <div className='property'>
                        <img src={require('../images/performance.png')}></img>
                        <h5>Efficient Performance</h5>
                        <h6>Electric motors provide instant torque, resulting in smooth and responsive acceleration.</h6>
                    </div>
                </div>
            </div>
            <div className='features-image'>
                <img src={require('../images/car1.png')}></img>
            </div>
        </div>
    )
}

export default Features1

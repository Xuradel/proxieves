import React from 'react'

function Item(item) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={item.image} alt='car-img'></img>
            </div>
            <div className='card-text'>
                <h5>{item.name}</h5>
                <p>${item.price}00</p>
            </div>
        </div>
    )
}

export default Item

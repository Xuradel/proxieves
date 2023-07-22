import { motion } from 'framer-motion'
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import cars from '../data/cars.json'
import Item from './Item'
function PopularDesigns() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <motion.div ref={carousel} className='new-section'>
            <h3>Popular vehicles</h3>
            <motion.div className='cards-container' drag='x'
                dragConstraints={{ right: width, left: -width }}
                whileTap={{ cursor: 'grabbing' }}
            >
                {cars.map(item => {
                    return <Item {...item}></Item>
                })}
                <div className='card-more'>
                    <button className='btn'>See more {">"}</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PopularDesigns

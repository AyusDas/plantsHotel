import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import img11 from '../assets/11.jpg'
import img12 from '../assets/herobg4.png'

const Gallery = () => {
    return (
        <section>
            <ul className='md:ml-16 ml-10 flex flex-wrap md:gap-16 gap-5'>
                <li><img src={img1} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img2} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img3} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img4} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img5} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img6} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img7} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img8} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img9} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img10} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img11} className='md:w-80 w-64 h-56 rounded-md'/></li>
                <li><img src={img12} className='md:w-80 w-64 h-56 rounded-md'/></li>
            </ul>
            <br/>
            <br/>
        </section>
    )
}

export default Gallery

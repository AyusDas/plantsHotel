import React from 'react'
import { BsSearch,BsCart2 } from 'react-icons/bs'
import shop1 from '../assets/shop1.jpg'
import shop2 from '../assets/shop2.jpg'
import shop3 from '../assets/shop3.jpg'
import shop4 from '../assets/shop4.jpg'
import shop5 from '../assets/shop5.jpg'
import shop6 from '../assets/5.jpg'
import shop7 from '../assets/7.jpg'
import shop8 from '../assets/9.jpg'
import shop9 from '../assets/10.jpg'

const Shop = () => {
    return (
        <section>

            <div className='flex flex-wrap gap-2 items-center md:ml-10'>
                <input type='text' name='name' className='w-[25rem] md:w-[30rem] h-14 bg-[#ecdece] border-2 border-[#ebd7bf] rounded-md pl-5 text-[#7f7f7f] placeholder-[#8c8c8c] font-normal text-xl focus:outline-none' placeholder='looking for something particular...'/>
                <div className='w-14 h-14 bg-[#ecdece] border-2 border-[#ebd7bf] rounded-md flex justify-center items-center'>
                    <BsSearch className='text-2xl text-[#7f7f7f] font-semibold hover:text-[#5b5a5a]'/>
                </div>
                <div className='w-14 h-14 bg-[#ecdece] border-2 border-[#ebd7bf] rounded-md flex justify-center items-center'>
                    <BsCart2 className='text-2xl text-[#7f7f7f] font-semibold hover:text-[#5b5a5a]'/>
                </div>
            </div>

            <ul className='md:ml-10 ml-10 flex flex-wrap md:gap-16 gap-5 py-16'>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop1} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop2} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop3} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop4} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop5} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop6} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop7} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop8} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='md:w-80 w-64 h-72 rounded-md shadow-md bg-stone-200'>
                        <img src={shop9} className='md:w-80 w-64 h-56 rounded-t-md'/>
                        <div className='md:w-80 w-64 h-16 flex items-center px-3 gap-3 justify-end'>
                            <input type='button' defaultValue='Buy Now' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                            <input type='button' defaultValue='Add To Cart' className='px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md text-lg text-gray-800 font-semibold'/>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Shop

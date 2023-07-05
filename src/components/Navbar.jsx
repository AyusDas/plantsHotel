import React, {useState} from 'react'
import logo from "../assets/logo2.svg"
import { AiOutlineMenu, AiOutlineInfoCircle } from "react-icons/ai"
import { GrGallery, GrHomeRounded } from "react-icons/gr"
import { BsBookmark,BsCart2 } from "react-icons/bs"

const Navbar = (props) => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar sticky top-0 z-10'>
            <div className='flex flex-1 gap-2 items-start'>
                <img src={logo} className='sm:w-[40px] w-[21px]'/>
                <div className='bigFont font-normal text-[16px] sm:text-[30px] text-[#42ae42]'>Plants'</div>
                <div className='bigFont font-normal text-[16px] sm:text-[30px] text-gray-600'>Vacay</div>
            </div>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                <li className='font-normal hover:font-medium cursor-pointer text-[16px] mr-10 flex items-center gap-1' onClick={props.handleClick4}><BsCart2 className='lg:flex hidden'/>Store</li>
                <li className='font-normal hover:font-medium cursor-pointer text-[16px] mr-10 flex items-center gap-1' onClick={props.handleClick}><GrGallery className='lg:flex hidden'/>Gallery</li>
                <li className='font-normal hover:font-medium cursor-pointer text-[16px] mr-10 flex items-center gap-1' onClick={props.handleClick2}><AiOutlineInfoCircle className='lg:flex hidden'/>Contact</li>
                <li className='font-normal hover:font-medium cursor-pointer text-[16px] flex items-center gap-1' onClick={props.handleClick3}><BsBookmark className='lg:flex hidden'/>Booking</li>
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='object-contain'/>
                <div className={`${ toggle ? 'flex' : 'hidden'} p-6 bg-zinc-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-md`}>
                    <ul className='list-none flex flex-col justify-center items-start flex-1'>
                        <li className='font-normal cursor-pointer text-[16px] flex gap-1 items-center' onClick={props.handleClick4}><BsCart2/>Store</li>
                        <li className='font-normal cursor-pointer text-[16px] flex gap-1 items-center ' onClick={props.handleClick}><GrGallery/>Gallery</li>
                        <li className='font-normal cursor-pointer text-[16px] flex gap-1 items-center ' onClick={props.handleClick2}><AiOutlineInfoCircle/>Contact</li>
                        <li className='font-normal cursor-pointer text-[16px] flex gap-1 items-center ' onClick={props.handleClick3}><BsBookmark/>Booking</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

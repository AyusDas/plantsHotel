import React from 'react'
import logo from '../assets/logo2.svg'
import { BsInstagram, BsFacebook, BsTwitter, BsTelegram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <section className='py-8'>
            <div className='flex flex-1 gap-2 items-start'>
                <img src={logo} className='sm:w-[40px] w-[21px]'/>
                <div className='bigFont font-normal text-[16px] sm:text-[30px] text-[#42ae42]'>Plants'</div>
                <div className='bigFont font-normal text-[16px] sm:text-[30px] text-gray-600'>Vacay</div>
            </div>
            <div className='w-[45rem] text-lg font-normal text-justify text-gray-800 py-4 niceFont'>
                Plants' Vacay, Premises No 3-46/2/26, Phase - II Gachibowli Road, Seri Lingampally, Gachibowli, Hyderabad, Telangana 500019, Ph. No. 8900248698
            </div>
            <div className='w-[45rem] text-lg font-normal text-justify text-gray-700 py-4 niceFont'>
                Plants' Vacay, 4/22/B, Ace Park, Anushakti Nagar, Andheri East, Mumbai, Maharashtra, 400094, Ph. No. 9989242814
            </div>
            <div className='w-[45rem] text-2xl text-justify text-gray-600 py-4 flex items-center gap-5'>
                <BsFacebook/>
                <BsInstagram/>
                <BsLinkedin/>
                <BsTwitter/>
                <BsTelegram/>
            </div>
            <br/>
        </section>
    )
}

export default Footer 

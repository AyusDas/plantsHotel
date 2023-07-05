import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Enquiry from './components/Enquiry'
import Vacancy from './components/Vacancy'
import About from './components/About'
import Shop from './components/shop'
import { useRef } from 'react'
import Footer from './components/footer'

function App() {
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)

    function handleClick() {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    function handleClick2() {
        ref2.current?.scrollIntoView({ behavior: 'smooth' });
    }
    function handleClick3() {
        ref3.current?.scrollIntoView({ behavior: 'smooth' });
    }
    function handleClick4() {
        ref4.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
        <div className='herobg pb-64 lg:pb-96 w-full overflow-hidden'>
            <div className='flex justify-center items-center sm:px-16 px-6'>
                <div className='xl:max-w-[1280px] w-full'>
                    <Navbar handleClick={handleClick} handleClick2={handleClick2} handleClick3={handleClick3} handleClick4={handleClick4}/>
                </div>
            </div>
            <div className='flex justify-center items-start sm:px-16 px-6'>
                <div className='xl:max-w-[1280px] w-full'>
                    <Hero/>
                </div>
            </div>
        </div>

        <div className='bg-[#EEEEEE] w-full overflow-hidden' ref={ref}>
            <h1 className='heroFont text-5xl text-gray-700 py-10 px-6 sm:px-16'>
                Our Gallery
            </h1>
            <div className='flex justify-center items-center sm:px-16 px-6'>
                <div className='xl:max-w-[1280px] w-full'>
                    <Gallery/>
                </div>
            </div>
        </div>

        <div className='bg-[#f5ebe0] w-full overflow-hidden' ref={ref2}>
            <h1 className='heroFont text-5xl text-gray-700 py-10 px-6 sm:px-16'>
                About Us
            </h1>
            <div className='flex justify-center items-center sm:px-16 px-6'>
                <div  className='xl:max-w-[1280px] w-full'>
                    <About/>
                </div>
            </div>

            <h1 className='heroFont text-5xl text-gray-700 py-10 px-6 sm:px-16'>
                Contact Us
            </h1>
            <div className='flex justify-center items-center sm:px-16 px-6'>
                <div  className='xl:max-w-[1280px] w-full'>
                    <Enquiry/>
                </div>
            </div>
        </div>

        <div className='bg-[#EEEEEE] w-full overflow-hidden' ref={ref3}>
            <h1 className='heroFont text-5xl text-gray-700 py-10 px-6 sm:px-16'>
                Check For Vacancies
            </h1>
            <div className='flex justify-center items-center sm:px-16 px-6'>
                <div  className='xl:max-w-[1280px] w-full'>
                    <Vacancy/>
                </div>
            </div>
        </div>

        <div className='bg-[#f5ebe0] w-full overflow-hidden' ref={ref4}>
            <h1 className='heroFont text-5xl text-gray-700 py-10 px-6 sm:px-16'>
                Buy Plants
            </h1>
            <div className='flex justify-center items-center sm:px-16 px-6'>
                <div className='xl:max-w-[1280px] w-full'>
                    <Shop/>
                </div>
            </div>
        </div>

        <div className='bg-[#EEEEEE] w-full overflow-hidden'>
            <div className='flex justify-center items-center sm:px-16 px-6'>
                <div className='xl:max-w-[1280px] w-full'>
                    <Footer/>
                </div>
            </div>
        </div>

        </>
    )
}

export default App

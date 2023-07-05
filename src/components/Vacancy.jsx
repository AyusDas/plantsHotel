import React, { useState } from 'react'

const Vacancy = () => {

    var datetime = new Date()
    var t1 = datetime.getHours()
    var t2 = datetime.getMinutes()

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() 
                * (max - min + 1)) + min;
    }

    const [vacancy, setVacancy] = useState(randomNumberInRange(10,30))

    const handleChange = () => {
        setVacancy(randomNumberInRange(10,30))
    }

    return (
        <section>
            <form method='post'>

                <div className='flex flex-wrap gap-10 md:gap-[25rem] md:ml-10 pb-16'>
                    <div>
                        <label className='text-xl font-semibold tracking tracking-wider niceFont'>
                            Check In Date :
                        </label><br/>
                        <input type='text' className='mt-2 heroFont w-56 text-4xl text-gray-700 bg-[#EEEEEE] focus:outline-none border-b-2 border-gray-400 '  placeholder={datetime.toISOString().slice(0,10)} onChange={()=>handleChange()}/>
                    </div>
                    <div>
                        <label className='text-xl font-semibold tracking tracking-wider niceFont'>
                            Check Out Date :
                        </label><br/>
                        <input type='text' className='mt-2 heroFont w-56 text-4xl text-gray-700 bg-[#EEEEEE] focus:outline-none border-b-2 border-gray-400 '  placeholder={datetime.toISOString().slice(0,10)} onChange={()=>handleChange()}/>
                    </div>
                </div>

                <div className='flex flex-wrap gap-10 md:gap-[25rem] md:ml-10 py-16'>
                    <div>
                        <label className='text-xl font-semibold tracking tracking-wider niceFont'>
                            Check In Time :
                        </label><br/>
                        <input type='text' className='mt-2 heroFont w-56 text-4xl text-gray-700 bg-[#EEEEEE] focus:outline-none border-b-2 border-gray-400 '  placeholder={`${t1}:${t2}`} onChange={()=>handleChange()}/>
                    </div>
                    <div>
                        <label className='text-xl font-semibold tracking tracking-wider niceFont'>
                            Check Out Time :
                        </label><br/>
                        <input type='text' className='mt-2 heroFont w-56 text-4xl text-gray-700 bg-[#EEEEEE] focus:outline-none border-b-2 border-gray-400 '  placeholder={`${t1}:${t2}`} onChange={()=>handleChange()}/>
                    </div>
                </div>
 
            </form>
            <div className='flex flex-wrap gap-10'>
                <div className='md:ml-10 mt-10 px-5 py-3 w-[25rem] bg-slate-100 rounded-md shadow-md'>
                    <h1 className=' text-gray-700 text-xl font-semibold tracking-wider niceFont'>
                        Number Of Vacancies Available : 
                    </h1>
                    { vacancy &&
                    <div className='mt-1 heroFont text-4xl text-gray-700'>
                        {vacancy}
                    </div> }
                </div>
                <div className='md:ml-10 mt-10 px-5 py-3 w-[25rem] bg-slate-100 rounded-md shadow-md'>
                    <h1 className=' text-gray-700 text-xl font-semibold tracking-wider niceFont'>
                        How Many Vacancies You Want : 
                    </h1>
                    <input type='text' className='mt-1 heroFont w-28 text-4xl text-gray-700 focus:outline-none bg-slate-100' placeholder='0'/>
                </div>
            </div>
            <div className='md:ml-10 my-10 px-1 py-3 w-[10rem] bg-slate-300 rounded-md shadow-md flex items-center justify-center  hover:bg-slate-200 cursor-pointer'>
                    <h1 className='text-gray-700 text-xl font-semibold tracking-wider heroFont'>
                        Book Now !
                    </h1>
            </div>
            <br/>
        </section>
    )
}

export default Vacancy

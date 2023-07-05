import React from 'react'

const Enquiry = () => {
    return (
        <section>
            <form method='post'>
                <div  className='flex flex-wrap gap-10 md:gap-16 md:ml-10'>
                    <input type='text' name='name' className='w-80 h-14 bg-[#ecdece] border-2 border-[#ebd7bf] rounded-md pl-5 text-[#8c8c8c] placeholder-[#8c8c8c] font-normal text-xl' placeholder='enter your name'/>
                    <input type='email' name='email' className='w-80 h-14 bg-[#ecdece] border-2 border-[#ebd7bf] rounded-md pl-5 text-[#8c8c8c] placeholder-[#8c8c8c] font-normal text-xl' placeholder='enter your email'/>
                    <textarea name='message' className='w-[45rem] h-56 bg-[#ecdece] border-2 border-[#ebd7bf] rounded-md pl-2 pt-2 text-[#8c8c8c] placeholder-[#8c8c8c] font-normal text-xl' placeholder='Write us a message...'/>
                </div>
                <input type='submit' className='mt-5 md:gap-16 md:ml-10 w-32 h-14 bg-[#ecdece] border-2 border-[#ebd7bf] rounded-md pl-1 text-[#8c8c8c] placeholder-[#8c8c8c] font-normal text-xl' defaultValue='send'/>
            </form>
            <br/>
            <br/>
        </section>
    )
}

export default Enquiry

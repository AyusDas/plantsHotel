import React from 'react'

const Hero = () => {
    return (
        <section className='flex md:flex-row flex-col sm:py-28 py-6'>
            <div className='flex flex-row w-full justify between items-center'>
                <div>
                    <h1 className='heroFont text-6xl text-gray-700'>A Hotel For
                        <br className='sm:hidden block'/>{" "}
                        <span className='text-gradient tracking-wider'>PLANTS!</span><br/>
                        where we keep them<br className='sm:hidden block'/>{" "} 
                        <span className='text-gradient tracking-wider'>SAFE.</span>
                    </h1>
                    {/* <div className='w-1/2 py-16 niceFont hidden lg:flex text-[21px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis nunc elit, et dignissim neque vestibulum in. Phasellus varius placerat egestas. Donec vitae elementum ante, sit amet maximus diam. Donec vitae augue ac nisi egestas pretium. Phasellus dui dolor, feugiat sed neque non, eleifend hendrerit mi. Nam nec urna odio.
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero

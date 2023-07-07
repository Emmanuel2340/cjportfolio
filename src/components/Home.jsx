import React from 'react'
import A from './images/image'

const Home = () => {
    return (
        <div className='p-[5px] sm:p-[50px] md:p-[60px] lg:p-[100px] z-7'>
            <div className='text-center flex flex-col-reverse sm:flex-col  sm:text-start sm:flex md:flex-row sm:justify-between items-center w-full my-auto'>
                <div className="name flex-0 sm:flex-1 mt-[100px] sm:mt-0 md:break-before-column" >
                    <p className='text-[20px] sm:text-[30px] md:text-[40px] font-light'>Hi,am</p>
                    <h1 className='text-[35px] sm:text-[50px] md:text-[75px] font-serif'>Igwe Chijioke</h1>
                    <p className='text-[20px] sm:text-[30] font-extralight mb-[6px] sm:mb-[10px] font-mono'>
                        Delivering of Top notch services is our number priority
                    </p>
                    <p className='text-[20px] sm:text-[30px] font-light'>We are here to serve you 24/7</p>
                    <a href="#c" className='block bg-gradient-to-r from-purple-600 to-pink-600 mx-auto w-[90%] sm:mx-0 sm:bg-gradient-to-r sm:from-purple-600 sm:to-pink-600  px-2 sm:w-[200px] text-center rounded-[6px] mt-3 py-3 text-white'>Let's Talk</a>
                </div>
                <div className="z-0 image mt-[40px] flex mx-auto w-[270px] h-[270px]  sm:w-[500px]  sm:h-[500px]  sm:mt-0">
                    <div className=" relative bg-gradient-to-l from-pink-600 to-purple-600 shadow-lg rounded-full flex justify-center w-full h-full box-decoration-slice sm:bg-gradient-to-r sm:from-purple-600 sm:to-pink-600 ">
                        <img src={A} className='absolute bottom-[-90px] sm:bottom-0 z-3 sm:z-0 sm:m-0-auto h-[340px]  sm:h-[500px] mb-3 mx-auto flex items-center justify-center sm:mx-auto' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import A from './images/co.png'
import { FaDownload } from 'react-icons/fa6'

const About = () => {
    return (
        <div className='p-[5px] mt-[40px] sm:mt-1 sm:p-[4] md:p-[60px] lg:p-[100px]'>
            <h1 className='container text-center mb-2 text-3xl sm:text-4xl text-pink-600 sm:text-pink-600 underline animate-bounce'>About Me</h1>
            <div className='text-center flex gap-[30px] flex-col-reverse sm:flex-col  sm:text-start sm:flex md:flex-row sm:justify-between items-center w-full my-auto'>
                <div className=" image mt-[40px] flex mx-auto w-[270px] h-[270px]  sm:w-[500px]  sm:h-[500px]  sm:mt-0">
                    <div className=" relative shadow-lg rounded-full flex justify-center w-full h-full bg-gradient-to-l from-purple-600 to-pink-600">
                        <img src={A} className='absolute bottom-[-90px] sm:bottom-0 sm:m-0-auto h-[340px]  sm:h-[450px] mb-3 mx-auto flex items-center justify-center sm:mx-auto' alt="" />
                    </div>
                </div>
                <div className="name flex-0 sm:flex-1" >
                    <p className='text-wrap text-xl font-extralight text-slate-900 sm:text-slate-900'>Goodday Sir, am <strong>Igwe chijioke richard</strong>,a self taught web developer with passion to make the world a better
                        place by using technogy, i am an experienced developer, who have helps to create aweness for
                        both business and personal want by creating both dynamic and static website using the follow skills</p><br />
                    <div className='flex flex-col sm:flex sm:flex-row p-0 sm:p-1  justify-between rounded-[3px] text-white sm:text-white text-2xl'>
                        <div className="flex flex-col sm:flex sm:flex-col">
                            <h1 className=' text-white sm:text-white md:text-white bg-gradient-to-r from-pink-600 p-1 rounded-[3px] to-purple-600 sm:bg-gradient-to-r sm:from-pink-600 sm:to-purple-600'>Styling</h1>
                            <div className="front text-purple-600 text-[15px] md:text-purple-600 sm:text-purple-600 sm:text-xl">
                                <h1>html</h1>
                                <h1>css</h1>
                                <h1>css module</h1>
                                <h1>scss</h1>
                                <h1>tailwindcss</h1>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex sm:flex-col">
                            <h1 className=' text-white sm:text-white md:text-white bg-gradient-to-r from-pink-600 p-1 rounded-[3px] to-purple-600 sm:bg-gradient-to-r sm:from-pink-600 sm:to-purple-600'>Frontend</h1>
                            <div className="text-pink-600 text-[15px] sm:text-pink-600 sm:text-xl md:text-pink-600">
                                <h1>javascript</h1>
                                <h1>Reactjs</h1>
                            </div>

                        </div>
                        <div className="flex flex-col sm:flex sm:flex-col">
                            <h1 className=' text-white sm:text-white md:text-white bg-gradient-to-r from-pink-600 to-purple-600 p-1 rounded-[3px] to-purple- sm:bg-gradient-to-r sm:from-pink-600 sm:to-purple-600'>Backend</h1>
                            <div className="front text-purple-600 text-[15px] md:text-purple-600 sm:text-purple-600 sm:text-xl">
                                <h1>Python</h1>
                                <h1>Django</h1>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex sm:flex-col">
                            <h1 className='text-white bg-gradient-to-r from-pink-600 md:text-white-600 sm:text-white sm: p-1 rounded-[3px] to-purple-600 sm:bg-gradient-to-r sm:from-pink-600 sm:to-purple-600'>Database</h1>
                            <div className="text-pink-600 text-[15px] sm:text-xl md:text-pink-600 sm:text-pink-600">
                                <h1>Postgresql</h1>
                                <h1>Sqlite</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="#c" className='block bg-purple-600 mx-auto w-[60%] sm:mx-0  sm:bg-purple-600 md:bg-purple-600 px-1 sm:w-[200px] text-center rounded-[6px] mt-3 py-3 text-white'>Let's Talk</a>
                        <a href="#c" download className='flex mx-auto border border-purple-600 w-[60%] sm:mx-0 shadow-lg  md:border-purple-600 sm:border-purple-600 px-2 sm:w-[200px] justify-center items-center text-center rounded-[6px] mt-3 py-3 text-purple-600 md:text-purple-600'><FaDownload className='mr-4' />CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

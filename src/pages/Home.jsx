import React from 'react'
import hackimg4 from '../assets/hackimg4.png'
import arrow_img from '../assets/arrow.png'

function Home() {
  return (
      <div id='Home' className='flex my-20 gap-20 justify-center items-center p-10'>
        <div className=' md:w-[50%] flex flex-col mx-28 gap-10  '>
            <h1 className='text-[#171717]  mx-4 md:mx-0  text-4xl md:text-5xl font-semibold'>Unleash Your Creativity at Hackarena</h1>
            <h1 className='text-[#626262]  mx-4 md:mx-0  text-xl md:text-2xl '>"Join us to solve real-world challenges, collaborate with innovators, and turn your ideas into reality.turn your ideas into reality."</h1>
          <div className='flex items-center justify-center gap-[15px] w-[280px] h-[55px] rounded-[75px] mt-[20px] bg-[#ff4141] font-medium text-xl text-white hover:scale-105 ease-in-out duration-300'>
            <button>Register Now</button>
            <img src={arrow_img} alt="" className='' />
          </div>
        </div>
        <div className='w-[50%] '>
          <img src={hackimg4} alt="" className='shadow-[10px_-5px_50px_-5px] shadow-blue-200 ' />
        </div>
      </div>
  )
}

export default Home
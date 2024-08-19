import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <div className='bg-slate-900 flex h-96 mt-64'>

          <ul className='py-14 ml-40 w-1/2'>
              <li >
                <img src='https://campusmonk.in/_next/static/media/logo-dark.998dc935.png' alt='logo' className='h-9 w-auto ' ></img>
              </li>

              <li className='mt-3'>
                <label className='text-gray-500 font-normal'>Tons of resources and expert mentorship, with hands-on practice sets.Which will help you to crack your dream placement.</label>
              </li> 

              
                <ul className='mt-10 flex'>
                  <Link to={'#'}><img src='https://github.com/shreyas399/Pictures/raw/main/youtube.jpg'  className='h-6 rounded-full mr-8 hover:cursor-pointer'></img></Link>
                  <Link to={'#'}><img src='https://github.com/shreyas399/Pictures/raw/main/instagram.jpeg' className='h-6 mr-8 rounded-full hover:cursor-pointer'></img></Link>
                  <Link to={'#'}><img src='https://github.com/shreyas399/Pictures/raw/main/linkedin.png' className='h-6 mr-8 rounded-full hover:cursor-pointer'></img></Link>
                </ul>

                <li className='mt-12 text-gray-500 font-semibold'>
                  Download our app
                </li>

                <ul className='flex mt-8'>
                 <Link to={'#'}> <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp_store_btn.58d02a8c.png&w=256&q=75'  className='h-10 w-auto mr-4 hover:cursor-pointer'></img></Link>
                  <Link to={'#'}><img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay_store_btn.d90eca25.png&w=384&q=75' className='h-10 w-auto hover:cursor-pointer'></img></Link>
                </ul>


                
              


             
          </ul>

          <ul className='py-16 ml-10 w-1/2'>
              <li className='font-semibold text-xl text-gray-300'>
                Links
              </li>

              <ul className='flex text-gray-300 mt-8'>
                <Link to={'#'}><h2 className='mr-36 hover:cursor-pointer'>Home</h2></Link>
                <Link to={'#'}><h2 className='mr-36 hover:cursor-pointer'>Courses</h2></Link>
                <Link to={'#'}><h2 className='mr-36 hover:cursor-pointer'>Mocktest</h2></Link>
              </ul>

              <Link to={'#'}><li className='py-3 text-gray-300 hover:cursor-pointer'>Fres Resources</li></Link>
          </ul>



          
      </div>

  )
}

export default Footer
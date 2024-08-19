import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'




function Home() {
  
  return (
    <div >
      <Link to={''}>
      <img 
        className='fixed bottom-4 right-4 h-16 w-16 rounded-full cursor-pointer' 
        src="https://github.com/shreyas399/Pictures/raw/main/message.png" 
        alt="Message Sticker"
      img/>
      </Link>
      
      <div className={`flex ml-24 mt-20`}>
        <ul className='w-1/2'>
          <li>
          <h1 className='font-bold text-6xl text-slate-900'>Let's crack your next placement Exam</h1>
          </li>
          <li>
            <h2 className='mt-6 font-semibold  text-gray-500'>Tons of resources and expert mentorship, with hands-on practice sets. Which will help you to crack your dream placement.</h2>
          </li>

          <li className='flex mt-6 font-semibold'>
            <img src="https://github.com/shreyas399/Pictures/raw/main/tick.png" alt="Green Checkmark" className='h-4 w-auto mt-1 mr-2' />
            <ul className='mr-60'>Aptitude</ul>
            <img src="https://github.com/shreyas399/Pictures/raw/main/tick.png" alt="Green Checkmark" className='h-4 w-auto mt-1 mr-2' />
            <ul>Data Structure & Algorithem</ul>
          </li>
          <li className='flex mt-6 font-semibold'>
            <img src="https://github.com/shreyas399/Pictures/raw/main/tick.png" alt="Green Checkmark" className='h-4 w-auto mt-1 mr-2' />
            <ul className='mr-36 '>Interview Preperation</ul>
            <img src="https://github.com/shreyas399/Pictures/raw/main/tick.png" alt="Green Checkmark" className=' h-4 w-auto mt-1 mr-2' />
            <ul>Mocktsets</ul>
          </li>

          <li  className='mt-16 flex'>
            <ul><Link to={'#'} className='py-4 px-16 rounded-md font-semibold bg-orange-500 text-white mr-9' >Get Started</Link></ul>
            <ul><Link className='py-4 px-16 rounded-md  bg-slate-100' to={'#'}>Watch Videos</Link></ul>

          </li>

          <li className='mt-14 flex'>
            <ul className='flex'>
            <img src="https://campusmonk.in/imgs/testimonials/1.png" className='h-10 rounded-full' alt="1" />
            <img src="https://campusmonk.in/imgs/testimonials/2.png" className='h-10 -ml-2 rounded-full' alt="2" />
            <img src="https://campusmonk.in/imgs/testimonials/3.png" className='h-10 -ml-2 rounded-full' alt="3" />
            <img src="https://campusmonk.in/imgs/testimonials/4.png" className='h-10 -ml-2 rounded-full' alt="4" />

            <h1 className='mt-2 ml-6 text-slate-500'>30000+ Happy Students</h1>
            </ul>
          </li>
        </ul>


        <ul className='w-1/2 flex justify-center '>
          <img src="https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3d.d5f3a58c.png&w=1080&q=75" alt="Img" className='h-96 w-auto ' />

        </ul>
      </div>



      <div className='flex bg-slate-200 mt-28 py-28  rounded-sm'>
        <ul className='w-1/2'>
        <Link to={'#'}>
        <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3237d967.jpg&w=3840&q=75' className='h-56  ml-2 rounded-md'></img>
        </Link>
        </ul>
        <ul className='w-1/2'>
        <Link to={'#'}>
        <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.52a91fd5.jpg&w=3840&q=75' className='h-56 ml-2  rounded-md'></img>
        </Link>
        </ul>
      </div>



      <div>
        <ul className=' mt-28 '>
          <li>
            <h1 className='flex justify-center font-bold text-3xl'>Premium courses</h1>
          </li>

          <li className='flex justify-center mt-2 text-slate-500 '>
              <h1>Explore our courses targeting various exams</h1>
          </li>

           <li>
              <ul className='flex justify-between items-center mt-10'>
                <label className='ml-24 text-2xl font-semibold'>Courses</label>
                <label className='mr-32 text-orange-500 text-base hover:underline'><Link to={'#'}>See all</Link></label>
              </ul>
            </li>

          <li className='flex ml-24 mt-5  '>
            <ul className='bg-white h-80 ml-2 w-1/5 rounded-lg mr-12 hover:bg-slate-100'>
            <Link to={'#'}>
            <img src='https://campusmonk.in/_next/image?url=%2Fcourses%2Fnew-sankalp-3.jpg&w=640&q=75' className='h-48 mt-4 ml-3 w-auto rounded-lg'></img>
            <label className='font-semibold ml-3 flex'>NEW SANKALP 3.0 BATCH</label>
            <label className='flex font-light text-slate-400 ml-3'>NEW SANKALP 3.0 BATCH</label>
            
                <ul className='flex'>
                  <lable className='flex mt-2 ml-3 text-xl font-normal'>₹1,500</lable>
                  <lable className='flex mt-2 ml-28 text-orange-500 font-normal hover:underline'><Link to={'#'}>Learn more</Link></lable>

                </ul>
                </Link>
            
            
             </ul>

             <ul className='bg-white h-80 ml-2 w-1/5 rounded-lg mr-12 hover:bg-slate-100'>
             <Link to={'#'}>
            <img src='https://campusmonk.in/_next/image?url=%2Fcourses%2Fnew-yodha-batch.jpg&w=640&q=75' className='h-48 mt-4 ml-3 w-auto rounded-lg'></img>
            <label className='font-semibold ml-3 flex'>New Yodha Batch</label>
            <label className='flex font-light text-slate-400 ml-3'>New Yodha Batch</label>
              <ul className='flex'>
                <lable className='flex mt-2 ml-3 text-xl font-normal'>₹1,300</lable>
                <label className='flex ml-28 mt-2 text-orange-500 font-normal hover:underline'><Link to={'#'}>Learn more</Link></label>
              </ul>
              </Link>
             </ul>

             <ul className='bg-white h-80 ml-2 w-1/5 rounded-lg mr-12 hover:bg-slate-100'>
             <Link to={'#'}>
            <img src='https://campusmonk.in/_next/image?url=%2Fcourses%2Fsankalp.png&w=640&q=75' className='h-48 mt-4 ml-3 w-auto rounded-lg'></img>
            <label className='font-semibold ml-3 flex'>Aptitude + Interview Course | TCS..</label>
            <label className='flex font-light text-slate-400 ml-3'>Aptitude + Interview Course | TCS for..</label>
              <ul className='flex'>
                <lable className='flex mt-2 ml-3 text-xl font-normal'>₹900</lable>
                <label className='flex ml-28 mt-2 text-orange-500 font-normal hover:underline'><Link to={'#'}>Learn more</Link></label>
              </ul>
              </Link>
             </ul>

            
            <ul className='bg-white h-80 ml-2 w-1/5 rounded-lg mr-12 hover:bg-slate-100'>
            <Link to={'#'}>
                  <img src='https://campusmonk.in/_next/image?url=%2Fcourses%2Fcapgemini.png&w=640&q=75' className='h-48 mt-4 ml-3 w-auto rounded-lg'></img>
                  <label className='font-semibold ml-3 flex'>Capgemini pseudo codes prepara...</label>
                  <label className='flex font-light text-slate-400 ml-3'>Capgemini pseudo codes preparation..</label>
                  <ul className='flex'>
                    <lable className='flex mt-2 ml-3 text-xl font-normal'>₹500</lable>
                    <label className='flex ml-28 mt-2 text-orange-500 font-normal hover:underline'><Link to={'#'}>Learn more</Link></label>
                  </ul>
                  </Link>
            </ul>
          </li>
          
       
        </ul>

      </div>



      

      <div className='mt-12'>
        <ul className='flex justify-between'>
        <h1 className=' flex ml-24 text-2xl font-sans font-semibold'>Mocktest</h1>
        <h1 className='flex mt-1 mr-28 text-orange-500 hover:underline'><Link to={'#'}>See all</Link></h1>
        </ul>


        <div className='flex mt-5'>
          <ul className='w-1/4 '>
            <li className='flex'>
                <div className='ml-24 bg-white rounded-lg py-2 hover:bg-slate-100'>
                  <Link to={'#'}>
                  <img src="https://campusmonk.in/_next/image?url=%2Fmocktests%2Flogical-reasoning.png&w=640&q=75" alt="course1" className='h-48 w-auto mt-4 px-4 ' />
                  <li className=' ml-4 mt-1'>Logical Reasoning</li>
                  <li className=' ml-4 mt-1 text-gray-300 text-sm'>All topics</li>
                  <ul className='flex'>
                  <lable className=' flex ml-4 mt-1 text-xl'>₹0</lable>
                  <label className='flex ml-40 font-normal text-orange-500 mt-1 mb-3 hover:underline'>learn more</label>
                  </ul>
                  </Link>
                </div>
            </li>
          </ul>



          <ul className='w-1/4'>
            <li className='flex'>
                <div className='ml-16 bg-white rounded-lg py-2 hover:bg-slate-100'>
                  <Link to={'#'}>
                  <img src="https://campusmonk.in/_next/image?url=%2Fmocktests%2Fnumerical-ability.png&w=640&q=75" alt="course2" className='h-48 w-auto mt-4 px-4 ' />
                  <li className=' ml-4 mt-1'>Numerical Ability</li>
                  <li className=' ml-4 mt-1 text-gray-300 text-sm'>All topics</li>
                  <ul className='flex'>
                  <lable className=' flex ml-4 mt-1 text-xl'>₹0</lable>
                  <label className='flex ml-40 font-normal text-orange-500 mt-1 mb-3 hover:underline'>learn more</label>
                  </ul>
                  </Link>
                </div>
            </li>
          </ul>




          <ul className='w-1/4'>
            <li className='flex'>
                <div className='ml-16 bg-white rounded-lg py-2 hover:bg-slate-100'>
                  <Link to={'#'}>
                  <img src="https://campusmonk.in/_next/image?url=%2Fmocktests%2Fverbal-ability.png&w=640&q=75" alt="course1" className='h-48 w-auto mt-4 px-4 ' />
                  <li className=' ml-4 mt-1'>Verbal Ability</li>
                  <li className=' ml-4 mt-1 text-gray-300 text-sm'>All topics</li>
                  <ul className='flex'>
                  <lable className=' flex ml-4 mt-1 text-xl'>₹0</lable>
                  <label className='flex ml-40 font-normal text-orange-500 mt-1 mb-3 hover:underline'>learn more</label>
                  </ul>
                  </Link>
                </div>
            </li>
          </ul>

        </div>




        <div className='bg-black  mt-24 text-white'>
          
          <div className='py-20'>
            <ul>
              <li className='flex justify-center text-3xl font-semibold '>Success Story</li>
              <li className='ml-80 mr-80 mt-2 text-gray-600 font-sans'>From aspirations to achievements, our Placement Prep Company empowers dreams. Through personalized guidance and innovative strategies,
                 we navigate individuals toward career success. With tailored support and rigorous preparation, our success stories exemplify our commitment 
                 to transforming potential into palpable achievements.</li>

                 <li className=' flex justify-center rounded-lg '>
                    <Carousel/>
                  </li>
            </ul>
          </div>
        </div>
         

        <div className='mt-28 flex justify-center'>
          <ul>
            <li className='flex justify-center text-4xl  font-semibold'>Free Resources</li>
            <li className=' flex justify-center mt-2 px-80 text-slate-500'>Unlocking Potential: Access Free Resources for Career Advancement - YouTube videos, eBooks, and more await to</li>
            <li className=' flex justify-center px-80 text-slate-500'> empower your journey to success.</li>

            <ul className='flex mt-12'>
              <ul className='w-1/2'>
                <iframe className='ml-24 rounded-lg ' width="650" height="375" src="https://www.youtube.com/embed/TCKXRVQzDTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </ul>
            <ul className='w-1/2'> 
              <p className=' ml-6 text-xl'>TCS Free Biggest Hiring 2024 | DON'T MISS | Apply Now!!!</p>
              <p className=' px-6 text-slate-400 mt-5'>Stay connected with our youtube channed, to get updated on job scenarios and openings. We regularly post videos on various topics related to jobs and placements.</p>

            </ul>

            </ul>


            <ul className='py-12 flex  justify-between'>
              <ul className='flex ml-24 text-2xl font-semibold'>
                Similar videos
              </ul>

              <ul className='flex mr-28 text-base font-semibold font-sans text-orange-500 hover:underline'>
                <Link to={"#"}>See all</Link>
              </ul>
            </ul>

            <ul className=''>
              <ul className='flex px-24'>
                <ul className='w-1/6 h-36 p-3'> <Link to={'https://www.youtube.com/watch?v=VldhoUB5EgQ'}>
                <a href="https://www.youtube.com/watch?v=VldhoUB5EgQ" target="_blank">
                  <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVldhoUB5EgQ%2Fmqdefault.jpg&w=384&q=75" alt="Video Thumbnail" ></img>
                </a>
                <li className=' mt-2 text-base font-semibold overflow-x-hidden'>🔴07 | Live actual paper</li>
                <li className=' mt-1 text-base  overflow-x-hidden'>Did you just say discount?</li>
                </Link>
                </ul>

                <ul className='w-1/6 h-36 p-3'>
                <Link to={"https://www.youtube.com/watch?v=-xiQcwSfK0g"}>
                <a href="https://www.youtube.com/watch?v=-xiQcwSfK0g" target="_blank">
                  <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-xiQcwSfK0g%2Fmqdefault.jpg&w=384&q=75" alt="Video Thumbnail" ></img>
                </a>
                <li className=' mt-2 text-base font-semibold overflow-x-hidden'>🔴02 | Crash course Day-2</li>
                <li className=' mt-1 text-base  overflow-x-hidden'>Did you just say discount?</li>
                </Link>
                </ul>

                <ul className='w-1/6 h-36 p-3'>
                <Link to={"https://www.youtube.com/watch?v=1WM6fwS7W3I"}>
                <a href="https://www.youtube.com/watch?v=1WM6fwS7W3I" target="_blank">
                  <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1WM6fwS7W3I%2Fmqdefault.jpg&w=384&q=75" alt="Video Thumbnail" ></img>
                </a>
                <li className=' mt-2 text-base font-semibold overflow-x-hidden'>🔴0 | Crash Course Perce</li>
                <li className=' mt-1 text-base  overflow-x-hidden'>Did you just say discount?</li>
                </Link>
                </ul>

                <ul className='w-1/6 h-36 p-3'>
                <Link to={"https://www.youtube.com/watch?v=Y2RVbADhu8s"}>
                <a href="https://www.youtube.com/watch?v=Y2RVbADhu8s" target="_blank">
                  <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FY2RVbADhu8s%2Fmqdefault.jpg&w=384&q=75" alt="Video Thumbnail" ></img>
                </a>
                <li className=' mt-2 text-base font-semibold overflow-x-hidden'>Dat2 -Live Work Shop |..</li>
                <li className=' mt-1 text-base  overflow-x-hidden'>Did you just say discount?</li>
                </Link>
                </ul>

                <ul className='w-1/6 h-36 p-3'>
                <Link to={"https://www.youtube.com/watch?v=RcpCZel73r0"}>
                <a href="https://www.youtube.com/watch?v=RcpCZel73r0" target="_blank">
                  <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRcpCZel73r0%2Fmqdefault.jpg&w=384&q=75" alt="Video Thumbnail" ></img>
                </a>
                <li className=' mt-2 text-base font-semibold overflow-x-hidden'>🔴02 | Crash course Day-4</li>
                <li className=' mt-1 text-base  overflow-x-hidden'>Did you just say discount?</li>
                </Link>
                </ul>

                <ul className='w-1/6 h-36 p-3'>
                <Link to={"https://www.youtube.com/watch?v=1drwhE2eG8k"}>
                <a href="https://www.youtube.com/watch?v=1drwhE2eG8k" target="_blank">
                  <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1drwhE2eG8k%2Fmqdefault.jpg&w=384&q=75" alt="Video Thumbnail" ></img>
                </a>
                <li className=' mt-2 text-base font-semibold overflow-x-hidden'>🔴05 | Crash Course Day-5</li>
                <li className=' mt-1 text-base  overflow-x-hidden'>Did you just say discount?</li>
                </Link>
                </ul>

                

              </ul>

            </ul>
            

          </ul>

        </div>




      </div>


      <div className='mt-40 bg-zinc-100 py-24'>

        <div className='flex justify-center text-3xl font-bold py-4'>Follow us on Social networks!</div>
        <div className='px-72'>Stay Connected, Stay Inspired: Follow Us on Twitter, YouTube, Instagram, and WhatsApp for exclusive content, updates, and</div>
        <div className='flex justify-center'>invaluable insights on career advancement.</div>



        

        


        
          <div className='mt-24 flex'>

            <div className='w-1/2'>
            <ul className='flex py-6'>

              <ul className=' flex w-96 h-28 ml-64 '>
                  <ul className=' flex w-1/3 p-2 bg-white py-5 mr-3 '>
                    <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhatsapp.9353d72c.png&w=48&q=75' className='h-10 w-auto ml-8'></img>
                    <li className='mt-14 flex justify-center -ml-14 hover:underline'><Link to={'#'}>Whatsapp</Link></li>
                  </ul>

                  <ul className=' flex w-1/3 p-2 bg-white py-5 mr-3'>
                    <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyoutube.f053f6dc.png&w=48&q=75' className='h-10 w-auto ml-8'></img>
                    <li className='mt-14 flex justify-center -ml-12 hover:underline'><Link to={'#'}>Youtube</Link></li>
                  </ul>

                  <ul className=' flex w-1/3 p-2 bg-white py-5 mr-3'>
                    <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftelegram.4f1ee510.png&w=48&q=75' className='h-10 w-auto ml-8'></img>
                    <li className='mt-14 flex justify-center -ml-12 hover:underline'> 
                      <Link to={'#'}>Telegram</Link></li>
                  </ul>

              </ul>

            </ul>

            <ul className=' flex w-96  ml-64 '>
                  <ul className=' flex w-1/3 p-2 bg-white py-5 mr-3 '>
                    <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstagram.2ab55c72.png&w=48&q=75' className='h-10 w-auto ml-8'></img>
                    <li className='mt-14 flex justify-center -ml-14 hover:underline'><Link to={'#'}>Instagram</Link></li>
                  </ul>

                  <ul className=' flex w-1/3 p-2 bg-white py-5 mr-3'>
                    <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flinkedin.e3b667c6.png&w=48&q=75' className='h-10 w-auto ml-8'></img>
                    <li className='mt-14 flex justify-center -ml-12 hover:underline'> <Link to={'#'}>LinkedIn</Link></li>
                  </ul>

                  <ul className=' flex w-1/3 p-2 bg-white py-5 mr-3'>
                    <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter.ed4faba7.png&w=48&q=75' className='h-10 w-auto ml-8'></img>
                    <li className='mt-14 flex justify-center -ml-12 hover:underline'><Link to={'#'}>Twitter</Link></li>
                  </ul>

              </ul>
            
          </div>

          <div className='w-1/2 flex ml-96'>
          <img src='https://campusmonk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommunity_3d.623a583b.png&w=384&q=75' className='h-96 w-auto '></img>

          </div>

          </div>

      </div>

    </div>


      
  )
}

export default Home
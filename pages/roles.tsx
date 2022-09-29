import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useState } from 'react'

const Roles: NextPage = () => {
const [loading, setLoading] = useState(true)
const router = useRouter()

setTimeout(() => {
  setLoading(false);
}, 3000)


  return (
    <div className="">
      <Head>
        <title>Zach Miller</title>
        <link rel="icon" href="" />
      </Head>

      <main className="text-[white]">
        { loading === true ?
         <div className="flex w-full h-screen bg-[black] flex-col items-center justify-center ">
       <svg id="spinner" className="animate-spin -ml-1 mr-3 h-20 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
       <circle className="opacity-100" cx="12" cy="12" r="10" stroke="transparent" strokeWidth="4"></circle>
       <path className="opacity-100" fill="red"  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
     </svg> 
     </div>
     :

       <div className='flex flex-col bg-[black] relative  w-full h-screen'>
       
        <div className="text-white">
        <span className=''></span>
        <div className='flex flex-col px-6 text-[white]'>
          <span className='flex flex-row justify-between items-center pt-10 z-20'>
          <a href='/' className='mobile:w-[7%] laptop:w-[3%]' ><img src='N.png'/></a>
            <button type="button" className='text-xl hover:underline' onClick={() => router.back()}>&larr; Go Back</button>
          </span>

        </div>
        </div>

        <span className='cursor-no-drop h-[6%] bg-[gray] font-thin flex flex-row justify-between items-center text-white mt-6 p-4 laptop:w-[30%] laptop:rounded-tr laptop:rounded-br laptop:mt-12'>
          <img src="/glass.svg"/>
          <p>Search for a movie, genre, show</p>
        </span>
        <h1 className='mt-10 text-xl p-4 laptop:flex laptop:flex-row laptop:justify-center laptop:text-2xl laptop:mt-10'>Recent Roles</h1>
        <div  className='flex flex-col w-full space-y-[2px] mb-32 text-sm laptop:w-[40%] laptop:mx-auto laptop:text-2xl'>
        <a href="https://www.xsauce.io/" target="blank" className='h-[14%] w-full bg-[gray] flex flex-row items-center text-white font-thin laptop:rounded-tr laptop:rounded-tl  mobile:h-[90px]'> 
          
          <img className='h-full laptop:rounded-tl' src='/xsauce.jpeg'/>
          
          <p className="px-4 ">Founder + CTO</p>
          </a>
          <a href="https://www.popcorn.network/" target="blank" className='h-[14%] w-full bg-[gray] flex flex-row items-center text-white font-thin mobile:h-[90px]'> 
          
          <img className='h-full' src='/popcorn.jpeg'/>
          
          <p className="px-4 ">Marketing Manager</p>
          </a>


          <a href="https://tollan.io/" target="blank"  className='h-[14%] w-full bg-[gray] flex flex-row items-center text-white font-thin mobile:h-[90px]'>  
          
          <img className='h-full border-r-1 border' src='/tollan.jpeg'/>
          
          <p className="px-4 ">Marketing Consultant</p>
          </a>
          <a href="https://fuse.io/" target="blank"  className='h-[14%] w-full bg-[gray] flex flex-row items-center text-white font-thin laptop:rounded-br laptop:rounded-bl mobile:h-[90px]'> 
          
          <img className='h-full laptop:rounded-bl' src='/fuse.jpeg'/>
          
          <p className="px-4 ">Marketing + Business Development</p>
          </a>
        
        </div>




       




       
        
       </div>
}
      </main>

    
    </div>
  )
}

export default Roles

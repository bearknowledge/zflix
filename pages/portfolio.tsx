import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useState } from 'react'

const Portfolio: NextPage = () => {
  const router = useRouter()
const [loading, setLoading] = useState(true)

setTimeout(() => {
  setLoading(false);
}, 3000)


  return (
    <div className="">
     <Head>
        <title>Zach Miller</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎥</text></svg>"></link>
      </Head>

      <main className="text-[white]">
        { loading === true ?
         <div className="flex w-full h-screen bg-black flex-col items-center justify-center ">
       <svg id="spinner" className="animate-spin -ml-1 mr-3 h-20 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
       <circle className="opacity-100" cx="12" cy="12" r="10" stroke="transparent" strokeWidth="4"></circle>
       <path className="opacity-100" fill="red"  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
     </svg> 
     </div>
     :

       <div className='flex flex-col bg-black w-full h-screen'>
       
        <div className="laptop:bg-[url('/piratesfull.jpeg')] bg-cover bg-top laptop:h-screen text-[white] z-10 mobile:bg-[url('/pirates.jpeg')] relative bg-top h-full">
        <span className='mobile:z-10 absolute bg-gradient-to-b from-transparent to-black w-full h-full opacity-100 laptop:h-full laptop:z-0'></span>
        <div className='flex flex-col px-6 text-[white]'>
          <span className='flex flex-row justify-between items-center pt-3 z-30'>
          <a href='/' className='mobile:w-[7%] laptop:w-[3%]' ><img src='N.png'/></a>
            <button type="button" className='text-xl hover:underline z-20' onClick={() => router.back()}>&larr; Go Back</button>
         </span>

        </div>
        </div>
        <div className='mobile:h-[40%] flex flex-col space-y-6 z-20 laptop:text-xl laptop:absolute w-full h-fit top-32'>
<div className='flex flex-col justify-center items-center laptop:hidden'>
<div className='mobile:text-[white] flex flex-row justify-center items-center z-20 space-x-2 laptop:absolute top-10 laptop:text-[30px]'>
<p>My Portfolio</p>
</div>

<div className='flex flex-row  justify-center items-center space-x-8 laptop:space-x-16'>
<div className='flex flex-col justify-center items-center z-20 space-y-1 mobile: text-[white]'>
<a className='flex flex-col justify-center items-center z-20 space-y-1 hover:opacity-80' href="https://brainstation.io/miami">
<img src='/+.svg'/>
<p>3 Pieces</p>
</a>
</div>

<a href='/'>
<img className="z-20 hover:opacity-80" src="/play.svg"/>
</a>

<div className='flex flex-col justify-center items-center z-20 space-y-1 mobile: text-[white]'>
<img src='/info.svg'/>
<p>Self-Taught</p>
</div>
</div>
</div>

<span className='flex flex-row justify-start font-bold text-[20px] mobile:text-sm ml-8 laptop:justify-center laptop:text-[40px] laptop:w-fit laptop:m-auto laptop:text-gray'>Recent Work </span>
<div className='flex flex-row justify-center space-x-4 w-full  px-8 z-20 mobile:pb-5 mobile:h-[40%] laptop:h-full laptop:pt-32'>

<a href="https://www.404DAO.io" target="blank"  className='flex flex-row justify-center  mobile:w-[40%]  hover:opacity-80 laptop:w-[20%]'><img className="rounded-md laptop:scale-125 desktop:scale-300" src="404DAO.png"/></a>
<a href="https://truestan.herokuapp.com/" target="blank"  className='flex flex-row justify-center  mobile:w-[40%] laptop:w-[20%] hover:opacity-80'><img className="rounded-md laptop:scale-150 desktop:scale-300" src="STAN.png"/></a>
<a href="https://v0-pi.vercel.app/" target="blank" className='flex flex-row justify-center hover:opacity-80 mobile:w-[40%] laptop:w-[20%]'><img className="rounded-md laptop:scale-125 desktop:scale-300" src="XSAUCEAPP.png"/></a>

</div>

</div>

       
        
       </div>
}
      </main>

    
    </div>
  )
}

export default Portfolio

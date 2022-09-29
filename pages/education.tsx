import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useState } from 'react'

const Education: NextPage = () => {
const router = useRouter()

const [loading, setLoading] = useState(true)

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
         <div className="flex w-full h-screen bg-black flex-col items-center justify-center ">
       <svg id="spinner" className="animate-spin -ml-1 mr-3 h-20 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
       <circle className="opacity-100" cx="12" cy="12" r="10" stroke="transparent" strokeWidth="4"></circle>
       <path className="opacity-100" fill="red"  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
     </svg> 
     </div>
     :

       <div className='flex flex-col bg-black relative  w-full h-screen'>
       
        <div className="laptop:bg-[url('/mercerFull.jpeg')] bg-cover h-full text-[white] z-10 mobile:bg-[url('/mercerMe.svg')] h-[60%]">
        <span className='mobile:z-10 bg-gradient-to-b from-transparent to-black absolute w-full h-[61%] opacity-100 laptop:h-[50%]'></span>
        <div className='flex flex-col px-6 text-[white]'>
          <span className='flex flex-row justify-between items-center pt-10 z-20'>
            <a href='/' className='mobile:w-[7%] laptop:w-[3%]' ><img src='N.png'/></a>
            <button type="button" className='text-xl hover:underline' onClick={() => router.back()}>&larr; Go Back</button>
          </span>

        </div>
        </div>
        <div className='mobile:h-[40%] flex flex-col space-y-4 pt-4 z-20 laptop:text-xl laptop:h-[60%]'>
<div className='flex flex-col justify-center items-center space-y-4 laptop:space-y-6'>
<div className='mobile:text-[white] flex flex-row justify-center items-center z-20'>
<p>Keiser University - Business Admin</p>
</div>

<div className='flex flex-row  justify-center items-center space-x-8 laptop:space-x-16'>
<div className='flex flex-col justify-center items-center z-20 space-y-1 mobile: text-[white]'>
<a className='flex flex-col justify-center items-center z-20 space-y-1 hover:opacity-80' href="https://brainstation.io/miami">
<img src='/+.svg'/>
<p> Wyncode</p>
</a>
</div>

<a href='https://kuseahawks.com/news/2019/8/10/baseball-inks-outfielder-zach-miller.aspx'>
<img className="z-20 hover:opacity-80" src="/play.svg"/>
</a>

<div className='flex flex-col justify-center items-center z-20 mobile: text-[white]'>
<img src='/info.svg'/>
<p className='pt-1'>Marketing</p>
<p className='leading-0'>(Focus)</p>
</div>
</div>
</div>

<span className='font-bold text-[20px] pl-4'>Popular on Resume</span>
<div className='flex flex-row justify-center space-x-4 w-full h-[40%] z-20 overflow-clip pb-4 laptop:h-[60%]'>
<a href="/roles" className='flex flex-col justify-center items-center rounded-md mobile:w-[40%] bg-cyan-600 ml-4 hover:opacity-80'><img className="mobile:w-[50%] laptop:w-[15%]" src="roles.svg"/>Roles</a>
<a href="/portfolio" className='flex flex-col justify-center items-center rounded-md mobile:w-[40%] bg-green-900 hover:opacity-80'><img className="mobile:w-[50%] laptop:w-[15%]" src="easel.svg"/>Portfolio</a>
<a href="/" className='flex flex-col justify-center items-center rounded-md mobile:w-[40%] bg-orange-900 hover:opacity-80'><img className="w-[50%] laptop:w-[15%]" src="home.svg"/>Home</a>
<a className='rounded-tl-md rounded-bl-md mobile:w-[10%] bg-white'></a>
</div>

</div>

       
        
       </div>
}
      </main>

    
    </div>
  )
}

export default Education

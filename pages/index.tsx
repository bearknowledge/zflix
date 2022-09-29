import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
const [loading, setLoading] = useState(true)

setTimeout(() => {
  setLoading(false);
}, 5000)


  return (
    <div className="">
      <Head>
        <title>Zach Miller</title>
        <link rel="icon" href="" />
      </Head>

      <main className="flex w-full h-screen bg-[#221F1F] flex-col items-center justify-center ">
        { loading === true ?
       <img id="spinner" src='/netflix.gif'/> :
       <div className='flex  bg-black flex-col relative items-center justify-center w-full h-[-webkit-fill-available]'>
        <h1 className='text-[white] absolute top-5 '>What do you want to know?</h1>
        
        <div className='grid grid-cols-2 gap-8'>

<a href="/education"className='flex flex-col justify-center items-center text-[white]'><img src="/avatar-red.png" className='w-[100px] h-[100px] rounded-md mb-3 hover:opacity-80'/>Education</a>
<a href="/roles" className='flex flex-col justify-center items-center text-[white]'><img src="/avatar-blue.png" className='w-[100px] h-[100px] rounded-md mb-3 hover:opacity-80'/>Roles</a>


<a href="/portfolio" className='flex flex-col justify-center items-center text-[white]'><img src="/avatar-green.png" className='w-[100px] h-[100px] rounded-md mb-3 hover:opacity-80'/>Portfolio</a>
{/* <span className='flex flex-col  justify-center items-center text-[white]'><img src="/avatar-blue.png" className='w-[100px] h-[100px] rounded-md mb-3'/>Skills</span> */}

        
        </div>
       </div>
}
      </main>

    
    </div>
  )
}

export default Home

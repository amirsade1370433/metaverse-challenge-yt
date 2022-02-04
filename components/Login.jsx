import React from 'react';
import Image from 'next/image';
import {bgimage , avatarimage} from './image'
import {useMoralis} from 'react-moralis'
function Login() {
  const {authenticate} = useMoralis()
  return (
    
    <div className="bg-black text-white relative">
      <div className='flex space-y-4 flex-col absolute z-50 h-4/6 items-center justify-center w-full'>
        <Image className='object-cover rounded-full' width={200} height={200}   src={avatarimage}/>
        <button onClick={authenticate} className='bg-yellow-500 rounded-lg font-bold p-5 animate-pulse'>
          login to metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={bgimage} layout='fill' objectFit='cover'/>
      </div>
    </div>
  )
}

export default Login;

import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';
function SendMessage({endOfMessagesRef}) {
    const {user , Moralis} = useMoralis()
    const [message , setMessage] = useState('')
    const sendMessage = (e) => {
        e.preventDefault()
        if(!message) return 
        const Messages = Moralis.Object.extend('Messages')
        const messages = new Messages()
        messages
        .save({
            message : message ,
            username : user.getUsername() ,
            ethAdrress : user.get('ethAddress')
        })
        .then((message) => {

        },
        (error)=>{
            console.log(error.Message);
            }
        )
        endOfMessagesRef.current.scrollIntoView({behavior : "smooth"})
        setMessage('')
    }
  return (
      <form className="flex fixed px-5 max-w-2xl shadow-xl rounded-full py-2 border-blue-400 hover:border-blue-600 ease-in-out transition-all border-2 bg-black opacity-70 p-3 bottom-10 w-11/12">
          <textarea style={{resize: "none"}} className='flex-grow  outline-none bg-transparent text-white placeholder-gray-500 mb ' placeholder={`enter a message ${user.getUsername()}`} type="text"  value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <button type='submit' onKeyPress={(e) => {}} onClick={sendMessage} className=' font-bold text-pink-500'> 
              send
          </button>
      </form>
  );
}

export default SendMessage;
 
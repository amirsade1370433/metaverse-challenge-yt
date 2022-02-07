import React, { useRef } from 'react';
import SendMessage from './SendMessage'
import Message from './Message'
import {ByMoralis , useMoralis , useMoralisQuery} from 'react-moralis'
function Messages() {
    const MINS_DURATION = 15 
    const {user} = useMoralis()
    const endOfMessagesRef = useRef(null) 
    const {error , data , loading } = useMoralisQuery(
        'Messages' ,
        (query) => query.ascending('createdAt').greaterThan(
            'createdAt' , new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
        [] , 
        {
            live : true
        }
        )
  return (
      <div className="pb-56">
          <div className="my-5">
              <ByMoralis variant='dark' style={{marginLeft:'auto' , marginRight : 'auto' }}/>
          </div>
          <div className="p-4 space-y-10">
            {data.map((message)=>(<Message key={message.id} message={message}/>))}
          </div>
          <div className="">
              <div className=" flex  justify-center">
                  <SendMessage endOfMessagesRef={endOfMessagesRef}/>
              </div>
          </div>
          <div ref={endOfMessagesRef} className=" ">
              <p className='text-center text-gray-400 mt-5'>
                  you are up to date {user.getUsername()} !
              </p>
          </div>
      </div>
  );
}

export default Messages;

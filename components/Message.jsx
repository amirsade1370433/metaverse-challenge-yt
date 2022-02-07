import React from 'react';
import {useMoralis} from 'react-moralis'
import Avatar from './Avatar';
import { format} from 'timeago.js';
 function Message({message}) {
    const {user} = useMoralis()
    const isUserMessage = message.attributes.ethAdrress === user.get("ethAddress")
    console.log(message.attributes.createdAt);
    return (
        <div className={` flex items-center space-x-2 relative justify-start ${isUserMessage && 'justify-end'}`}>
            <div className={`${isUserMessage && 'bg-gray-400'} max-w-sm rounded overflow-hidden bg-blue-300 bg-opacity-75  shadow-lg`}>
            <div className="px-4 py-2">
                <p className="text-white-700 font-bold text-base break-all" >
                    {message.get("message")}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center">
                <span className=" rounded-full px-1 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">
                    <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2 '}`} >
                        <Avatar username={message.get("username" )}/>
                    </div>
                </span>
                <span class="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{message.get("username")}</span>
                <span class="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{format(message.attributes.createdAt)}</span>
                
            </div>
        </div>
        </div>
  );
}

export default Message;

import React from 'react';
import { useMoralis } from 'react-moralis';

function ChangeUsername() {
const {user , setUserData , isUserUpdating , userError} = useMoralis()
const setUsername = (e) => {
    e.preventDefault()
    const username = prompt(`enter your username (current: ${user.getUsername()})` )
    if (!username) return
    setUserData({
        username , 
    })
}
    return (
      <div className="text-sm absolute top-5 right-5 ">
          <button disabled={isUserUpdating} onClick={setUsername} className='hover:text-pink-400'>
              change username
          </button>
      </div>
  );
}

export default ChangeUsername;

import Image from 'next/image';
import React from 'react';
import {useMoralis} from 'react-moralis'
function Avatar({username , logoutOnPress}) {
const {user , logout} = useMoralis()
  return (
    <Image onClick={() => logoutOnPress && logout()} className="rounded-full bg-black hover:opacity-75 cursor-pointer"  layout='fill' src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get('username')}
    .svg`}/>
  );
}

export default Avatar;

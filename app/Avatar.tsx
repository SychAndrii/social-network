import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/profile.jpg';

type Props = {
    classes?: string
}

const Avatar = ({classes}: Props) => {
    return (
        <div>
            <Image src={profilePic} alt='Avatar' className={`rounded-full ring-offset-2 ring-white ring-2 border-2 border-gray-400 relative -top-20 w-40 h-40 object-cover object-pos ${classes}`} />
        </div>
    )
}

export default Avatar
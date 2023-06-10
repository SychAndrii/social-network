import React, { ReactNode } from 'react'
import Image from 'next/image'
import profilePic from '@/public/profile.jpg';

type Props = {
    classes?: string,
    children?: ReactNode
}

const Avatar = ({ classes, children }: Props) => {
    return (
        <div className='relative inline-block' >
            <Image src={profilePic} alt='Avatar' className={`rounded-full object-cover object-pos ${classes}`} />
            {children}
        </div>
    )
}

export default Avatar
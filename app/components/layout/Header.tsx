import React from 'react'
import Logo from './components/Logo'
import GlobalInput from './components/GlobalInput'
import styles from './style.module.css'
import NotificationsIcon from './components/NotificationsIcon'
import MusicPlayer from './components/components/MusicPlayer'
import ItemWrapper from './components/ItemWrapper'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import Image from 'next/image'
import profilePic from '@/public/profile.jpg';
import {RiArrowDownSLine} from "react-icons/ri";

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="px-4">
            <div className="flex justify-between dekstop:max-w-6xl mx-auto">
                <div className="flex items-center">
                    <Logo /> <span className={`font-bold pl-1 text-2xl relative  -top-[0.9px] ${styles.globalInput}`}>vkontakte</span>
                    <GlobalInput />
                    <span className="mr-7"></span>
                    <ItemWrapper>
                        <NotificationsIcon />
                    </ItemWrapper>
                    <span className="mr-7"></span>
                    <ItemWrapper>
                        <MusicPlayer />
                    </ItemWrapper>
                </div>
                <div className="flex items-center">
                    <ItemWrapper>
                        <BsFillGrid3X3GapFill className="text-icon" />
                    </ItemWrapper>
                    <span className="mr-4"></span>
                    <ItemWrapper classes="pl-2 pr-1">
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                            className='rounded-full w-8 h-8 object-cover'
                            quality={100}
                        />
                        <RiArrowDownSLine className="text-icon ml-2" />
                    </ItemWrapper>
                </div>
            </div>

        </header>
    )
}

export default Header
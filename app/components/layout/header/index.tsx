import React from 'react'
import Logo from './Logo'
import GlobalInput from './HeaderInput'
import styles from './style.module.css'
import NotificationsIcon from '../../icons/NotificationsIcon'
import MusicPlayer from './MusicPlayer'
import ItemWrapper from './ItemWrapper'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import Image from 'next/image'
import profilePic from '@/public/profile.jpg';
import { RiArrowDownSLine } from "react-icons/ri";
import MobileItemWrapper from './MobileItemWrapper'
import HomeIcon from '../../icons/HomeIcon'
import SearchIcon from '../../icons/SearchIcon'
import MessageIcon from '../../icons/MessageIcon'
import BarsIcon from '../../icons/BarsIcon'
import IconContainer from '../../icons/IconContainer'
import GreyButton from './HeaderButton'
import GridIcon from '../../icons/GridIcon'
import ArrowDownIcon from '../../icons/ArrowDownIcon'
import PreviewAvatar from '../../elements/avatars/PreviewAvatar'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="desktop:px-4 flex">
            {/* Destktop header */}

            <div className="desktop:flex max-w-desktop-edge w-full justify-between mx-auto hidden">
                <div className="flex items-center">
                    <Logo /> <span className={`font-bold pl-1 text-2xl relative  -top-[0.9px] ${styles.globalInput}`}>vkontakte</span>
                    <GlobalInput />
                    <span className="mr-7"></span>
                    <ItemWrapper>
                        <IconContainer>
                            <NotificationsIcon />
                        </IconContainer>
                    </ItemWrapper>
                    <span className="mr-7"></span>
                    <ItemWrapper>
                        <MusicPlayer />
                    </ItemWrapper>
                </div>
                <div className="flex items-center">
                    <ItemWrapper>
                        <IconContainer>
                            <GridIcon />
                        </IconContainer>
                    </ItemWrapper>
                    <span className="mr-4"></span>
                    <ItemWrapper classes="pl-2 pr-1">
                        <PreviewAvatar />
                        <IconContainer classes="ml-2">
                            <ArrowDownIcon />
                        </IconContainer>
                    </ItemWrapper>
                </div>
            </div>

            {/* Mobile header */}
            <div className={`flex desktop:hidden flex-1 w-full`}>
                <GreyButton classes="flex-grow">
                    <MobileItemWrapper>
                        <IconContainer>
                            <HomeIcon />
                        </IconContainer>
                        <p className="text-small-text text-xs">Home</p>
                    </MobileItemWrapper>
                </GreyButton>

                <GreyButton classes="flex-grow">
                    <MobileItemWrapper>
                        <IconContainer>
                            <SearchIcon />
                        </IconContainer>
                        <p className="text-small-text text-xs">Search</p>
                    </MobileItemWrapper>
                </GreyButton>

                <GreyButton classes="flex-grow">
                    <MobileItemWrapper>
                        <IconContainer>
                            <MessageIcon />
                        </IconContainer>
                        <p className="text-small-text text-xs">Messages</p>
                    </MobileItemWrapper>
                </GreyButton>

                <GreyButton classes="flex-grow">
                    <MobileItemWrapper>
                        <IconContainer>
                            <NotificationsIcon />
                        </IconContainer>
                        <p className="text-small-text text-xs">Notifications</p>
                    </MobileItemWrapper>
                </GreyButton>

                <GreyButton classes="flex-grow">
                    <MobileItemWrapper>
                        <IconContainer>
                            <BarsIcon />
                        </IconContainer>
                        <p className="text-small-text text-xs">More</p>
                    </MobileItemWrapper>
                </GreyButton>
            </div>
        </header>
    )
}

export default Header
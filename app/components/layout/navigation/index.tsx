import React from 'react'
import NavigationItem from './NavigationItem'
import HomeIcon from '../../icons/HomeIcon'
import PersonIcon from '../../icons/PersonIcon';
import NewsIcon from '../../icons/NewsIcon';
import MessageIcon from '../../icons/MessageIcon';
import PhoneIcon from '../../icons/PhoneIcon';
import FriendsIcon from '../../icons/FriendsIcon';
import CommunitiesIcon from '../../icons/CommunitiesIcon';
import PhotoIcon from '../../icons/PhotoIcon';
import MusicIcon from '../../icons/MusicIcon';
import VideoIcon from '../../icons/VideoIcon';

type Props = {}

const Navigation = (props: Props) => {
  const links = [
    {
      text: "My profile",
      icon: <PersonIcon />,
      href: ""
    },
    {
      text: "News",
      icon: <NewsIcon />,
      href: ""
    },
    {
      text: "Messenger",
      icon: <MessageIcon />,
      href: ""
    },
    {
      text: "Calls",
      icon: <PhoneIcon />,
      href: ""
    },
    {
      text: "Friends",
      icon: <FriendsIcon />,
      href: ""
    },
    {
      text: "Communities",
      icon: <CommunitiesIcon />,
      href: ""
    },
    {
      text: "Photos",
      icon: <PhotoIcon />,
      href: ""
    },
    {
      text: "Music",
      icon: <MusicIcon />,
      href: ""
    },
    {
      text: "Videos",
      icon: <VideoIcon />,
      href: ""
    }
  ]
  return (
    <nav className="w-36 mr-5">
      <ul className="desktop:flex hidden desktop:flex-col text-sm">
        {
          links.map((link, index) => (
          <li className="mb-3 hover:bg-blue-hover p-1 hover:cursor-pointer" key={index}>
            <NavigationItem text={link.text} icon={link.icon} href={link.href} />
          </li>))
        }
      </ul>
    </nav>
  )
}

export default Navigation
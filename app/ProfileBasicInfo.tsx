import React from 'react'
import Avatar from './Avatar'
import IconContainer from './components/icons/IconContainer'
import LocationIcon from './components/icons/LocationIcon'
import InfoIcon from './components/icons/InfoIcon'
import BasicInfoLink from './BasicInfoLink'
import ArrowDownIcon from './components/icons/ArrowDownIcon'
import BlueButton from './components/elements/BlueButton'

type Props = {}

const ProfileBasicInfo = (props: Props) => {
  return (
    <div className="rounded-md h-32 px-5 relative -top-5 bg-white">
      <Avatar />
      <div className="flex flex-col absolute top-[15px] left-[190px]">
        <h1 className="text-xl font-bold">Andrey Sych</h1>
        <div className="flex mt-2">
          <BasicInfoLink href="" icon={<LocationIcon />} text='Toronto' classes={'mr-2'} />
          <BasicInfoLink href="" icon={<InfoIcon />} text='More info' />
        </div>
      </div>
      <div className="absolute right-[20px] flex top-[15px]">
        <BlueButton>
          <a href="">Edit profile</a>
        </BlueButton>
        <BlueButton>
          <a href="" className='flex items-center'>
            More
            <IconContainer classes='!text-attention-color'>
              <ArrowDownIcon />
            </IconContainer>
          </a>
        </BlueButton>
      </div>
    </div>
  )
}

export default ProfileBasicInfo
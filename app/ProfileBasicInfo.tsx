import React from 'react'
import BigAvatar from './components/elements/avatars/BigAvatar'
import IconContainer from './components/icons/IconContainer'
import LocationIcon from './components/icons/LocationIcon'
import InfoIcon from './components/icons/InfoIcon'
import BasicInfoLink from './BasicInfoLink'
import ArrowDownIcon from './components/icons/ArrowDownIcon'
import PlusIcon from './components/icons/PlusIcon'
import BlueButton from './components/elements/buttons/BlueButton'
import GreyButton from './components/layout/header/HeaderButton'
import { StatusType } from './types/StatusType'

type Props = {}

const ProfileBasicInfo = (props: Props) => {
  return (
    <div className="desktop:text-left text-center rounded-md desktop:h-32 h-44 px-5 desktop:pb-0 relative -top-5 bg-white">
      <BigAvatar classes="desktop:mx-0 relative -top-20" status={StatusType.ONLINE} />
      <div className="flex -top-[70px] relative flex-col desktop:absolute desktop:top-[15px] desktop:left-[190px] text-center desktop:text-left">
        <h1 className="text-xl font-bold">Andrey Sych</h1>
        <div className="flex mt-2 justify-center">
          <BasicInfoLink href="" icon={<LocationIcon />} text='Toronto' classes={'mr-2'} />
          <BasicInfoLink href="" icon={<InfoIcon />} text='More info' />
        </div>
        <GreyButton classes="w-full desktop:hidden mt-5 py-2 !text-attention-color">
          <IconContainer classes='!text-attention-color mr-1'>
            <PlusIcon />
          </IconContainer>
          Create
        </GreyButton>
      </div>
      <div className="absolute right-[20px] desktop:flex top-[15px] hidden">
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
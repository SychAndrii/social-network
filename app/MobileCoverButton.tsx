import React from 'react'
import BlackButton from './components/elements/buttons/BlackButton'
import IconContainer from './components/icons/IconContainer'

type Props = {
    icon: React.ReactNode,
    classes?: string
}

const MobileCoverButton = ({icon, classes}: Props) => {
  return (
    <BlackButton classes = {`absolute px-2 top-5 flex desktop:hidden !rounded-full ${classes}`}>
      <IconContainer classes='!text-white !text-2xl'>
            {icon}
        </IconContainer>
      </BlackButton>
  )
}

export default MobileCoverButton
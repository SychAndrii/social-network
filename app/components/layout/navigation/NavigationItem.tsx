import React from 'react'
import IconContainer from '../../icons/IconContainer'

type Props = {
    text: string,
    icon: any,
    href?: string
}

const NavigationItem = ({text, icon, href}: Props) => {
  return (
    <>
    <a href={href} className="flex items-end">
    <IconContainer classes="mr-2 !text-attention-color">
            {icon}
    </IconContainer>
       <span className="text-sm">{text}</span>
    </a>
    </>
  )
}

export default NavigationItem
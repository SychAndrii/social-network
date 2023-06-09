import React from 'react'
import IconContainer from './components/icons/IconContainer'
import LocationIcon from './components/icons/LocationIcon'

type Props = {
    icon: any,
    href: string,
    text: string,
    classes?: string
}

const BasicInfoLink = ({ icon, href, text, classes }: Props) => {
    return (
        <h3 className={`text-sm text-small-text hover:underline ${classes}`}>
            <a href={href} className="flex items-center">
                <IconContainer classes='mr-1'>
                    {icon}
                </IconContainer>
                {text}
            </a>
        </h3>
    )
}

export default BasicInfoLink
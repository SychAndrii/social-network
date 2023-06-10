import React from 'react'
import styles from './style.module.css'
import BlackButton from './components/elements/buttons/BlackButton'
import IconContainer from './components/icons/IconContainer'
import PencilIcon from './components/icons/PencilIcon'
import MobileCoverButton from './MobileCoverButton'
import DotsIcon from './components/icons/DotsIcon'
import ArrowBackIcon from './components/icons/ArrowBackIcon'

type Props = {}

const Cover = (props: Props) => {
  return (
    <div className={` h-[45vw] min-h-[180px] desktop:h-60 rounded-t-md w-full relative ${styles.defaultCoverBG}`}>
      
      {/* Desktop button */}
      
      <BlackButton classes = "absolute right-0 top-5 hidden desktop:flex">
      <IconContainer classes='mr-2 !text-white !text-md'>
            <PencilIcon />
        </IconContainer>
          Change cover
      </BlackButton>

      {/* Mobile buttons */}

      <MobileCoverButton icon={<ArrowBackIcon />} classes='left-2 ml-3' />
      <MobileCoverButton icon={<DotsIcon />} classes='right-2 mr-0' />
    </div>
  )
}

export default Cover
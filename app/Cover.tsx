import React from 'react'
import styles from './style.module.css'
import BlackButton from './components/elements/BlackButton'
import IconContainer from './components/icons/IconContainer'
import PencilIcon from './components/icons/PencilIcon'

type Props = {}

const Cover = (props: Props) => {
  return (
    <div className={` h-60 rounded-t-md w-full relative ${styles.defaultCoverBG}`}>
      <BlackButton classes = "absolute right-0 top-5">
      <IconContainer classes='mr-2 !text-white !text-md'>
            <PencilIcon />
        </IconContainer>
          Change cover
      </BlackButton>
    </div>
  )
}

export default Cover
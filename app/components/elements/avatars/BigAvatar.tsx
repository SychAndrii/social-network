import React from 'react'
import Avatar from './Avatar'
import StatusFactory from '../StatusFactory'
import { StatusType } from '../../../types/StatusType'
import { AvatarType } from '../../../types/AvatarType'

type Props = {
    classes?: string,
    status?: StatusType 
}

const BigAvatar = ({classes, status}: Props) => {
  const statusJSX = <StatusFactory status={status} avatar={AvatarType.BIG} />;
  return (
    <Avatar classes={`ring-offset-2 ring-white ring-2 border-2 border-gray-400 w-28 h-28 desktop:w-40 desktop:h-40 ${classes}`}>
        {statusJSX && statusJSX }
    </Avatar>
  )
}

export default BigAvatar
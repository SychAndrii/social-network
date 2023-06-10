import React from 'react'
import Avatar from './Avatar'
import OnlineStatus from '../statuses/OnlineStatus'
import StatusFactory from '../StatusFactory'
import { StatusType } from '../../../types/StatusType'
import { AvatarType } from '../../../types/AvatarType'

type Props = {
    classes?: string,
    status?: StatusType | undefined
}

const PreviewAvatar = ({ classes, status }: Props) => {
    const statusJSX = <StatusFactory status={status} avatar={AvatarType.PREVIEW} />;
    return (
        <Avatar classes={`w-8 h-8 ${classes}`}>
            {statusJSX && statusJSX}
        </Avatar>
    )
}

export default PreviewAvatar
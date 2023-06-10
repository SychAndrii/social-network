import React from 'react'
import OnlineStatus from './statuses/OnlineStatus';
import { StatusType } from '../../types/StatusType';
import { AvatarType } from '../../types/AvatarType';

type Props = {
    status: StatusType | undefined,
    avatar: AvatarType
}

const StatusFactory = ({status, avatar}: Props) => {
    if(status == StatusType.ONLINE && avatar == AvatarType.BIG) {
        return <OnlineStatus classes='desktop:top-10 desktop:right-3 top-0 right-1' />;
    }
    return null;
}

export default StatusFactory
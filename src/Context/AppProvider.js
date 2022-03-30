import React, { createContext, useContext, useMemo, useState } from 'react';
import useFirestore from './../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext()

function AuthProvider({children}) {
    const [isAddRoomVisible,setIsAddRoomVisible] = useState(false)
    const [isInviteMemberVisible,setIsInviteMemberVisible] = useState(false)
    const [selectedRoomId,setSelectedRoomId] = useState(null)
    const {user: { uid }}= useContext(AuthContext)

    const roomsCondition = useMemo(() => {
        return{
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    },[uid])
    const rooms=useFirestore('rooms',roomsCondition)
    console.log(rooms)
   
    let selectedRoom= useMemo(() =>rooms.find(room => room.id === selectedRoomId),[rooms,selectedRoomId])
    if(!selectedRoom) {
        selectedRoom={
            name:"",
            description:"",
            members: [] ,
        }
    }

    const membersCondition = useMemo(() => {
        return{
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectedRoom.members
        }
    },[selectedRoom.members])
    const membersInRoom=useFirestore('users',membersCondition)   

    return (
        <AppContext.Provider value={{
            rooms,
            membersInRoom,
            selectedRoom,
            isAddRoomVisible,setIsAddRoomVisible,
            selectedRoomId,setSelectedRoomId,
            isInviteMemberVisible,setIsInviteMemberVisible
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AuthProvider;


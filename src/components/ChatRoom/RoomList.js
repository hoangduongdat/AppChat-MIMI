import React, { useContext} from 'react';
import {Button, Collapse, Typography} from 'antd'
import styled  from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import { AppContext } from '../../Context/AppProvider';
function RoomList(props) {
    const { Panel } =  Collapse

    /**
     * room:
     * {
     *  name: 'room name'
     * desciption: 'mo ta'
     * members: [uid1,uid2]
     * }
     */
    const {setIsAddRoomVisible, setSelectedRoomId} = useContext(AppContext)

    const { rooms } = useContext(AppContext)

    const handleAddRoom = () => {
        setIsAddRoomVisible(true)
    }
    
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <Panel header='Danh sách các phòng' key='1'>
                {
                    rooms.map(room =>(<LinkStyle key={room.id} onClick={()=>setSelectedRoomId(room.id)}>{room.name}</LinkStyle>))
                }
                <Button type='text' icon={<PlusSquareOutlined/>} onClick={handleAddRoom}>Thêm Phòng</Button>
            </Panel>
            
        </Collapse>
    );
}

export default RoomList;

const LinkStyle = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    margin-left: 15px;
    color: white;
`
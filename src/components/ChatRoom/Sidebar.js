import React from 'react';
import { Col, Row } from 'antd';
import UserInfo from './UserInfo'
import RoomList from './RoomList';
import styled  from 'styled-components';

function Sidebar(props) {
    return (
        <SidebarStyle>
            <Row>
                <Col span={24}>
                    <UserInfo/>
                </Col>
                <Col span={24}>
                    <RoomList/>
                </Col>
            </Row>
        </SidebarStyle>
        
    );
}

export default Sidebar;

const SidebarStyle= styled.div`
    background: #f0f0f0;
    height: 100vh;
    
`
import React, { useContext } from 'react';
import {  Avatar, Typography } from 'antd';
import styled from 'styled-components';
import {auth} from '../firebase/config'
import { AuthContext } from './../../Context/AuthProvider';
function UserInfo(props) {

    const {user:{displayName, photoURL}} = useContext(AuthContext)

    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
                <Typography.Text className='username'>{displayName}</Typography.Text>
            </div>
            <ButtonStyle ghost onClick={()=>auth.signOut()}>Đăng Xuất</ButtonStyle>
        </WrapperStyled>
    );
}

export default UserInfo;


const WrapperStyled= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;
    border-bottom: 1px solid rgb(230, 230, 230);
    background:  #40a9ff;
    color: white;
    .username{
        color: white;
        margin-left: 5px;
    }
`
const ButtonStyle= styled.button`
    background: transparent;
    padding: 4px 10px;
    border: none;
    border-radius: 4px;
    

    &:hover {
        box-shadow: 0 1px 4px 1px;
    }
`
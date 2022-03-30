import React from 'react';
import { Row, Col, Button, Typography } from 'antd'
import { auth} from '../firebase/config'
import firebase from '../firebase/config'
import { addDocument, generateKeywords } from './../firebase/services';

const { Title} = Typography

const fbProvider = new firebase.auth.FacebookAuthProvider()
const ggProvider = new firebase.auth.GoogleAuthProvider()



function Login(props) {
    
    const handleFbLogin = async () => {
        const {additionalUserInfo, user} = await auth.signInWithPopup(fbProvider)
        console.log(additionalUserInfo.isNewUser)
        if(additionalUserInfo?.isNewUser) {
            addDocument('users',{ 
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            })
        }
    }
    const handleGGLogin = async () => {
        const {additionalUserInfo, user} = await auth.signInWithPopup(ggProvider)
        console.log(additionalUserInfo.isNewUser)
        if(additionalUserInfo?.isNewUser) {
            addDocument('users',{ 
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            })
        }
    }
    return (
        <div>
            <Row justify='center'  style={{height: '800px'}}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>My Chat App!</Title>
                    <Button style={{width: '100%', marginBottom: '5px'}} onClick={handleGGLogin}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button style={{width: '100%'}} onClick={handleFbLogin}>
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
                
            </Row>
        </div>
    );
}

export default Login;

import { Modal, Form, Input } from 'antd';
import React, { useContext } from 'react';
import { AppContext } from './../../Context/AppProvider';
import { addDocument } from './../firebase/services';
import { AuthContext } from './../../Context/AuthProvider';

function AddRoomModal(props) {
    const {isAddRoomVisible, setIsAddRoomVisible} = useContext(AppContext)
    const [form] =Form.useForm()
    const {user: {uid}} =useContext(AuthContext)
    const handleOk = () => {
        console.log(form.getFieldValue())
        addDocument('rooms',{
            ...form.getFieldValue(),
            members: [uid]
        })

        form.resetFields()

        setIsAddRoomVisible(false)
    }

    const handleCancel = () => {
        setIsAddRoomVisible(false)
        form.resetFields()

    }

    return (
        <div>
            <Modal
                title="Tạo Phòng"
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Tên Phòng" name="name">
                        <Input placeholder="Nhập tên phòng"/>
                    </Form.Item> 
                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea placeholder="Nhập mô tả"/>
                    </Form.Item> 
                </Form>

            </Modal>
            
        </div>
    );
}

export default AddRoomModal;
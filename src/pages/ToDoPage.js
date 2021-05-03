import React from 'react'
import Sidebar from '../components/Sidebar'
import GroupTask from '../components/GroupTask'
import Col from 'react-bootstrap/Col'

const ToDoPage = () => {
    return (
        <div className="bg my-font">
            <Col md="1" className="logo">
                <Sidebar />
            </Col>
            <div className="min-vh-100">
                <GroupTask />
            </div>
        </div>
    )
}

export default ToDoPage

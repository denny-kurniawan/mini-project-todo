import React from 'react'
import Sidebar from '../components/Sidebar'
import GroupTask from '../components/GroupTask'

const ToDoPage = () => {
    return (
        <div className="min-vw-100 min-vh-100 bg my-font d-flex flex-wrap">
            <Sidebar />
            <GroupTask />
        </div>
    )
}

export default ToDoPage

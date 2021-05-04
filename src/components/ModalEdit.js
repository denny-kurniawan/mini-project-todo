import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'

const ModalEdit = props => {
    const { name, percent, id, todo_id } = props

    const [editTask, setEditTask] = useState(false)
    const showEditTask = () => setEditTask(true)
    const closeEditTask = () => setEditTask(false)

    const [editName, setEditName] = useState(name)
    const [editPercent, setEditPercent] = useState(percent)
    const handleChangeEditName = e => setEditName(e.target.value)
    const handleChangeEditPercent = e => setEditPercent(e.target.value)
    const handleEditTask = () => {
        const editData = {
            "name": editName,
            "progress_percentage": editPercent,
            "target_todo_id": todo_id
        }

        axios
            .patch(`https://todos-project-api.herokuapp.com/todos/${todo_id}/items/${id}`, editData)
            .then(res => setEditTask(!editTask))
    }

    return (
        <>
            <Dropdown.Item onClick={showEditTask}><span className="material-icons md-14">edit</span> Edit</Dropdown.Item>
            <Modal show={editTask} onHide={closeEditTask}>
                <Modal.Header className="border-0" closeButton>
                    <span style={{color: "#262626"}} className="form-head">Edit Task</span>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label className="form-label">Task Name</Form.Label>
                    <FormControl type="text" placeholder="Task Name" defaultValue={editName} onChange={handleChangeEditName} />
                    <Form.Label className="form-label">Progress (%)</Form.Label>
                    <FormControl className="w-25" type="text" placeholder="0%" defaultValue={editPercent} onChange={handleChangeEditPercent} />
                </Modal.Body>
                <Modal.Footer className="border-0 my-1">
                <Button className="btn-sm px-3 cancel-btn" variant="" onClick={closeEditTask}>
                    Cancel
                </Button>
                <Button className="btn-sm px-3" variant="success" onClick={handleEditTask}>
                    Save Task
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEdit

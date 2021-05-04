import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const ModalDelete = props => {
    const { todo_id, id } = props

    const [showModal, setShowModal] = useState(false)
    const openClose = () => setShowModal(!showModal)
    const handleDelete = () => {
        axios
            .delete(`https://todos-project-api.herokuapp.com/todos/${todo_id}/items/${id}`)
            .then(res => setShowModal(false))
    }

    return (
        <>
            <Dropdown.Item onClick={openClose}><span className="material-icons md-14">delete</span> Delete</Dropdown.Item>
            <Modal show={showModal} onHide={openClose}>
                <Modal.Header className="border-0" closeButton>
                    <span style={{color: "#FAAD14"}} className="material-icons mr-4">error_outline</span> <span style={{color: "#262626"}} className="form-head">Delete Task</span>
                </Modal.Header>
                <Modal.Body>
                    <p className="ml-5" color="#262626">Are you sure want to delete this task?<br />Your action can’t be reverted.</p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                <Button className="btn-sm px-3 cancel-btn" variant="" onClick={openClose}>
                    Cancel
                </Button>
                <Button className="btn-sm px-3" variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDelete

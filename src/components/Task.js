import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"
import ModalEdit from './ModalEdit'
import ModalDelete from './ModalDelete'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

const Task = (props) => {
    const [tasks, setTasks] = useState(null)
    const { id, index } = props

    useEffect(() => {
        axios
            .get(`https://todos-project-api.herokuapp.com/todos/${id}/items`)
            .then(res => {
                const result = res.data
                setTasks(result)
            })

    }, [tasks, id])

    const [newTask, setNewTask] = useState(false)
    const showNewTask = () => setNewTask(true)
    const closeNewTask = () => setNewTask(false)
    
    const [newName, setNewName] = useState(null)
    const [newPercent, setNewPercent] = useState(null)
    const handleChangeNewName = e => setNewName(e.target.value)
    const handleChangeNewPercent = e => setNewPercent(e.target.value.split("%")[0])
    const handleNewTask = () => {
        const newData = {
            "name": newName,
            "progress_percentage": newPercent
        }
        
        axios
            .post(`https://todos-project-api.herokuapp.com/todos/${id}/items`, newData)
            .then(res => setNewTask(false))
    }

    const handleMoveLeft = (e, todo_id, id) => {
        const left = {
            "target_todo_id": todo_id - 1
        }

        axios
            .patch(`https://todos-project-api.herokuapp.com/todos/${todo_id}/items/${id}`, left)
    }

    const handleMoveRight = (e, todo_id, id) => {
        const right = {
            "target_todo_id": todo_id + 1
        }

        axios
            .patch(`https://todos-project-api.herokuapp.com/todos/${todo_id}/items/${id}`, right)
    }

    return (
        <div>
            {
                tasks 
                ? tasks.length > 0
                    ? tasks.map(task => {
                        const { id, todo_id, progress_percentage, name } = task
                        return (
                            <div key={id} className="task">
                                <span>{name}</span> <br />
                                <div className="d-flex flex-wrap justify-content-between">
                                    <Progress className="w-50" percent={progress_percentage} />
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <span className="material-icons pointer">more_horiz</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {
                                                index === 0
                                                    ? <Dropdown.Item onClick={e => handleMoveRight(e, todo_id, id)}><span className="material-icons md-14">arrow_forward</span> Move Right</Dropdown.Item>
                                                    : index === 3
                                                        ? <Dropdown.Item onClick={e => handleMoveLeft(e, todo_id, id)}><span className="material-icons md-14">arrow_back</span> Move Left</Dropdown.Item>
                                                        : <>
                                                            <Dropdown.Item onClick={e => handleMoveLeft(e, todo_id, id)}><span className="material-icons md-14">arrow_back</span> Move Left</Dropdown.Item>
                                                            <Dropdown.Item onClick={e => handleMoveRight(e, todo_id, id)}><span className="material-icons md-14">arrow_forward</span> Move Right</Dropdown.Item>
                                                        </>
                                            }
                                            {/* <Dropdown.Item onClick={showEditTask}><span className="material-icons md-14">edit</span> Edit</Dropdown.Item> */}
                                            <ModalEdit name={name} percent={progress_percentage} id={id} todo_id={todo_id} />
                                            <ModalDelete todo_id={todo_id} id={id} />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    
                                </div>
                            </div>
                        )
                    })
                    : <div className="no-task">
                        <span>No task available</span>
                    </div>
                : null
            }
            <span onClick={showNewTask} className="new-task pointer"><span className="material-icons md-14">control_point</span> New Task</span>
            <Modal show={newTask} onHide={closeNewTask}>
                <Modal.Header className="border-0" closeButton>
                    <span style={{color: "#262626"}} className="form-head">Create Task</span>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label className="form-label">Task Name</Form.Label>
                    <FormControl type="text" placeholder="Task Name" onChange={handleChangeNewName} />
                    <Form.Label className="form-label">Progress (%)</Form.Label>
                    <FormControl className="w-25" type="text" placeholder="0" onChange={handleChangeNewPercent} />
                </Modal.Body>
                <Modal.Footer className="border-0 my-1">
                    <Button className="btn-sm px-3 cancel-btn" variant="" onClick={closeNewTask}>
                        Cancel
                    </Button>
                    <Button className="btn-sm px-3" variant="success" onClick={handleNewTask}>
                        Save Task
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Task

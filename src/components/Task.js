import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"

const Task = (props) => {
    const [tasks, setTasks] = useState(null)
    const { id } = props

    useEffect(() => {
        axios
            .get(`https://todos-project-api.herokuapp.com/todos/${id}/items`)
            .then(res => {
                const result = res.data
                setTasks(result)
            })

    }, [tasks])

    return (
        <div>
            {
                tasks 
                ? tasks.length > 0
                    ? tasks.map(task => {
                        const { todo_id,  done, progress_percentage, name } = task
                        return (
                            <div className="task">
                                <span>{name}</span> <br />
                                <div className="d-flex flex-wrap justify-content-around">
                                    <Progress className="w-50 justify-content-around" percent={progress_percentage} />
                                    <span class="material-icons-outlined">more_horiz</span>
                                </div>
                            </div>
                        )
                    })
                    : <div className="no-task">
                        <span>No task available</span>
                    </div>
                : null
            }
        </div>
    )
}

export default Task

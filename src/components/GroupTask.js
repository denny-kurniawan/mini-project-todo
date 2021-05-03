import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Task from './Task'

const GroupTask = () => {
    const [groups, setGroups] = useState(null)
    const colors = [
        { 'color1': '#EB2F96', 'color2': '#FFF9FB', 'color3': '#FFADD2', 'color4': '#FFF0F6'},
        { 'color1': '#7B61FF', 'color2': '#FCFAFD', 'color3': '#D3ADF7', 'color4': '#F9F0FF'},
        { 'color1': '#2F54EB', 'color2': '#F7FAFF', 'color3': '#ADC6FF', 'color4': '#F0F5FF'},
        { 'color1': '#52C41A', 'color2': '#F8FEF1', 'color3': '#B7EB8F', 'color4': '#F6FFED'}
    ]
    
    useEffect(() => {
        axios
            .get('https://todos-project-api.herokuapp.com/todos')
            .then(res => {
                const result = res.data
                setGroups(result)
            })
    }, [groups])

    return (
        <div className="content">
            <h5>Product Roadmap</h5>
            <div className="d-flex flex-wrap justify-content-between">
            {
                colors.map((color, index) => {
                    const { color1, color2, color3, color4 } = color
                    return (
                        <div className="group" style={{border: `1px solid ${color1}`, backgroundColor: color2}}>
                            <span className="group-name font-size" style={{border: `1px solid ${color3}`, backgroundColor: color4}}>
                                {
                                    groups
                                    ? groups[index].title
                                    : null
                                }
                            </span> <br />
                            <span className="font-size">
                                {
                                    groups
                                    ? groups[index].description
                                    : null
                                }
                            </span>
                            {
                                groups
                                ?  <Task id={groups[index].id} />
                                : null
                            }
                           
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default GroupTask

import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'

const GroupTask = () => {
    const colors = [
        { 'color1': '#EB2F96', 'color2': '#FFF9FB'},
        { 'color1': '#7B61FF', 'color2': '#FCFAFD'},
        { 'color1': '#2F54EB', 'color2': '#F7FAFF'},
        { 'color1': '#52C41A', 'color2': '#F8FEF1'}
    ]
    
    // useEffect(() => {
    //     axios.get('')
        
        
    // })

    return (
        <div className="content">
            <h5>Product Roadmap</h5>
            <div className="d-flex flex-wrap justify-content-between">
            {
                colors.map(color => {
                    const { color1, color2 } = color
                    return (
                        <div className="group" style={{backgroundColor: color2, border: `1px solid ${color1}`}}>
                            ABC
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default GroupTask

import React, { Component } from 'react'
// ******Components********
import Task from './Components/Task/Task';
import Addnewtask from './Components/Addnewtask/Addnewtask'


class Handler extends Component {
    render() {
        return (
            <div>
                <Task content="Task to do" id='1' />
                <Addnewtask />
            </div>
        )
    }
}

export default Handler

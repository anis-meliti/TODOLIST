import React from 'react';
// *********** Style********
import './task.css';
// ********Material UI*******
import { Container, TextField, Fab } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

const Task = ({ content }) => {
    return (
        <Container className="task-container">
            <TextField
                disabled
                id="outlined-disabled"
                name='tasktodo'
                value={content}
                margin="normal"
                variant="outlined"
            />
            <Fab
                color="primary"
                aria-label="add"
                size='small'>
                <DoneIcon />
            </Fab>
            <Fab
                title="Delete"
                aria-label="delete"
                size='small'>
                <DeleteIcon />
            </Fab>
        </Container>
    )
}

export default Task

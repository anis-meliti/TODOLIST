import React, { Component } from 'react'
// *********Style*********
import './Addnewtask.css'
// *********Matriel UI ************
import { Container, TextField, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'


class Addnewtask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                id: 0,
                content: ''
            }
        }
    }
    onChangeHandler = event => {
        let content = event.target.value;
        this.setState({
            id: this.state.todo.id + 1,
            content: content
        })

    }

    render() {
        return (
            <Container className="task-container">
                <TextField
                    id="outlined-disabled"
                    name='tasktodo'
                    placeholder="Add new Task...."
                    margin="normal"
                    variant="outlined"
                    onChange={this.onChangeHandler}
                />
                <Fab
                    color="primary"
                    aria-label="add"
                    size='small'>
                    <AddIcon />
                </Fab>

            </Container>
        )
    }
}

export default Addnewtask

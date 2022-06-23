import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Task } from './Task';

export default function ListTasks() {
    let navigate = useNavigate()
    let localValue = localStorage.getItem("react-app-tasks")
    let tasks: Task[] = localValue ? JSON.parse(localValue): []
    let deleteIndexes: Number[] = []

    function deleteTasks() {
        if (!deleteIndexes.length) {
            alert("Please select tasks to delete")
            return false
        }
        let localValue = localStorage.getItem("react-app-tasks")
        if (localValue) {
            let tasks = JSON.parse(localValue)
            tasks = tasks.filter((task: Task, index: Number) => {
                return deleteIndexes.indexOf(index) === -1
            })
            localStorage.setItem("react-app-tasks", JSON.stringify(tasks))
            deleteIndexes = []
        }
        navigate("/")
        return true
    }

    function setDelete(index: Number, value: Boolean) {
        if (value) {
            deleteIndexes.push(index)
        } else {
            deleteIndexes.splice(deleteIndexes.indexOf(index), 1)
        }
    }

    return (
        <Container>
            <div>
                <Button variant="primary" onClick={e => navigate("/add-task")}>Add Task</Button>
                <Button variant="danger" onClick={e => deleteTasks() }>Bulk Delete</Button>
            </div>
            <Row>
                {tasks.map((task, index) => {
                    return (
                        <Col md={4} key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>{task.name}</Card.Body>
                                <p><input type="checkbox" onChange={e => setDelete(index, e.target.checked)}  /></p>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}
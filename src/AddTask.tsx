import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Task } from './Task';

export default function AddTask() {
    let navigate = useNavigate()
    let [name, setName] = useState("")

    function save() {
        if (!name.trim()) {
            alert("Please enter task name")
            return false
        }
        let localValue = localStorage.getItem("react-app-tasks")
        let tasks: Task[] = localValue ? JSON.parse(localValue): []
        tasks.push({name})
        localStorage.setItem("react-app-tasks", JSON.stringify(tasks))
        navigate("/list-tasks")
        return true
    }
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={4}>
                    <Form>
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control as="textarea" value={name} onChange={e => setName(e.target.value)} rows={3} />
                        <br/>
                        <p><Button variant="primary" onClick={save}>Add Task</Button></p>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    );
}
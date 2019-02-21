import React, { Component } from 'react';
import './MilestoneCreate.css'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class MilestoneCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childName: '',
            milestone: '',
            date: '',
            description: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/api/milestone", {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((mileData) => {
                this.props.updateMilestonesArray();
                this.setState({
                    childName: '',
                    milestone: '',
                    date: '',
                    description: ''
                })
            })
    }

    render() {
        return (
            <div className="mc-div">
                <h3>Enter a Milestone</h3>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="childName">Child's Name</Label>
                        <Input id="childName" type="text" name="childName"  value={this.state.childName} placeholder="enter child's name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="milestone">Milestone</Label>
                        <Input id="milestone" type="text" name="milestone" value={this.state.milestone} placeholder="enter Milestone" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input id="date" type="text" name="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="description">Description</Label>
                    <Input id="ddescription" type="text" name="description" className="mc-inputDescription" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="info">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default MilestoneCreate;
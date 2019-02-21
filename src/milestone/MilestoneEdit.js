import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';

class MilestoneEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            childName: '',
            milestone: '',
            date: '',
            description: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.milestone.id,
            childName: this.props.milestone.childName,
            milestone: this.props.milestone.milestone,
            date: this.props.milestone.date,
            description: this.props.milestone.description,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Update a Milestone</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="childName">Child's Name</Label>
                                <Input id="childName" type="text" name="childName" value={this.state.childName} placeholder="enter child's name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="milestone">Milestone</Label>
                                <Input id="milestone" type="text" name="milestone" value={this.state.milestone} placeholder="enter milestone" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">date</Label>
                                <Input id="date" type="text" name="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Milestone</Label>
                                <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default MilestoneEdit;
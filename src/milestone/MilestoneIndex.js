import React, { Component } from 'react';
import MilestoneCreate from './MilestoneCreate';
import MilestoneTable from './MilestoneTable';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import MilestoneEdit from './MilestoneEdit';

class MilestoneIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            milestones: [],
            updatePressed: false,
            milestoneToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchMilestones()
    }

    fetchMilestones = () => {
        fetch("http://localhost:3000/api/milestone", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((mileData) => {
            return this.setState({ milestones: mileData})
        })
    }

    milestoneDelete = (event) => {
        fetch(`http://localhost:3000/api/milestone/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ log: { id: event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => this.fetchMilestones())
    }

    milestoneUpdate = (event, milestones) => {
        fetch(`http://localhost:3000/api/milestone/${milestones.id}`, {
            method: 'PUT',
            body: JSON.stringify({mileData: milestones}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => {
            this.setState({ updatePressed: false})
            this.fetchMilestones();
        })
    }

    setUpdatedMilestone = (event, milestone) => {
        this.setState({
            milestoneToUpdate: milestone,
            updatePressed: true
        })
    }

    render() {
        const milestones = this.state.milestones.length >= 1 ?
        <MilestoneTable milestones={this.state.milestones}
        delete={this.milestoneDelete} update={this.setUpdatedMilestone} /> : <h2>Save a Milestone to see your table</h2> 
        return (
            <Container>
                <Row>
                    <Col md="3">
                    <MilestoneCreate token={this.props.token} updateMilestonesArray={this.fetchMilestones} />
                    </Col>
                    <Col md="9">
                        {milestones}
                    </Col>
                </Row>
                <Col md="12">
                {
                    this.state.updatePressed ? <MilestoneEdit t={this.state.updatePressed} update={this.milestoneUpdate} milestone={this.state.milestoneToUpdate} />
                    : <div></div>
                }
                </Col>
            </Container>
        )
    }
}

export default MilestoneIndex;
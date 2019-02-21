import React from 'react';
import './MilestoneTable.css'
import {
    Container,
    Table,
    Button
} from 'reactstrap';

const MilestoneTable = (props) => {
    return (
        <Container className="mt-container">
            <h3>MILESTONES</h3>
            <hr />
            <Table className="table-style" striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Child's Name</th>
                        <th>Milestone</th>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.milestones.map((milestone, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{milestone.id}</th>
                                    <td>{milestone.childName}</td>
                                    <td>{milestone.milestone}</td>
                                    <td>{milestone.date}</td>
                                    <td>{milestone.description}</td>
                                    <td>
                                        <Button id={milestone.id} onClick={props.delete} color="danger">Delete</Button>
                                        <Button id={milestone.id} onClick={e => props.update(e, milestone)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default MilestoneTable;
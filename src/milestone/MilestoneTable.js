import React from 'react';
import './MilestoneTable.css'
import {
    Container,
    Row,
    Col,
    Table,
    Button
} from 'reactstrap';

const MilestoneTable = (props) => {
    return (
        <Container className="mt-container">
            <Row>
                
                <Col md="12">
                <div>
                    <h3>MILESTONES</h3>
                    <hr />
                    <Table >
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Child's Name</th>
                                <th>Milestone</th>
                                <th>Date</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                props.milestones.map((milestone, id) => {
                                    let displayDate = new Date(milestone.date).toDateString()
                                    return (

                                        <tr className="table-row" key={id}>
                                            {/* <th scope="row">{milestone.id}</th> */}
                                            <td>{milestone.childName}</td>
                                            <td>{milestone.milestone}</td>
                                            <td>{displayDate}</td>
                                            <td>
                                                <td>{milestone.description}</td>
                                                <Button className="delete" id={milestone.id} onClick={props.delete} color="danger">Delete</Button>
                                                <Button className="update" id={milestone.id} onClick={e => props.update(e, milestone)} color="warning">Update</Button>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                </Col>
                
            </Row>
        </Container >
    );
}

export default MilestoneTable;
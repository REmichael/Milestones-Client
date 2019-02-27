import React from 'react';
import './MilestoneTable.css'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
                        <h3 className="h3">MILESTONES</h3>
                        <hr />
                        <Table >
                            <thead>
                                <tr>
                                    <th>Child's Name</th>
                                    <th>Milestone</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Image</th>
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
                                                <td>{milestone.description}</td>
                                                <td>
                                                    <img src={milestone.image} width="200"/> <br />
                                                    <IconButton onClick={(e) => props.delete(e, milestone.id)}>
                                                        <DeleteIcon className="deleteIcon" id={milestone.id}>Delete</DeleteIcon>
                                                    </IconButton>
                                                    <IconButton>
                                                        <EditIcon className="editIcon" id={milestone.id} onClick={e => props.update(e, milestone)}>Update</EditIcon>
                                                    </IconButton>
                                                    {/* <Button className="delete" color="danger">Delete<DeleteIcon id={milestone.id} onClick={props.delete} /></Button>
                                                <Button className="update" id={milestone.id} onClick={e => props.update(e, milestone)} color="warning">Update</Button>  */}
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
import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import './MilestoneCreate.css'
import APIURL from '../helpers/environment';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col
} from 'reactstrap';




const style = {
    grid: {
        width: '60%',
    },
};

class MilestoneCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childName: '',
            milestone: '',
            date: new Date(),
            description: '',
            image: '',
        };
    }

   

    handleDateChange = (date) => {
        this.setState({
            date: date
        });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/milestone`, {
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
                    date: new Date(),
                    description: '',
                    photo: '',
                })
            })
    }

    render() {
        const { classes } = this.props;
        // const { selectedDate } = this.state;
        return (
            <Container className="container" color="info">
                <Row>
                    <Col>
                        <Form className="mc-div" onSubmit={this.handleSubmit}>
                            <h3>Enter a Milestone</h3>
                            <hr />
                            <FormGroup>
                                <Label for="childName">Child's Name</Label>
                                <Input id="childName" type="text" name="childName" value={this.state.childName} placeholder="enter child's name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="milestone">Milestone</Label>
                                <Input id="milestone" type="text" name="milestone" value={this.state.milestone} placeholder="enter Milestone" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container className={classes.grid} justify="space-around">
                                        <DatePicker margin="normal" label="Select a Date" value={this.state.date} onChange={this.handleDateChange} />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input id="description" type="text" name="description" className="mc-inputDescription" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Picture URL">Picture URL</Label>
                                <Input id="image" type="text" name="image" value={this.state.image} placeholder="Enter Image URL" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="info">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

MilestoneCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(MilestoneCreate);
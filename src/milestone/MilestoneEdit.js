import 'date-fns'; 
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
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

const styles = {
    grid: {
        width: '60%'
    },
};

class MilestoneEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            childName: '',
            milestone: '',
            date: new Date(),
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

    handleDateChange = (date) => {
        this.setState({
            date: date
        });
    };

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
        const { classes } = this.props;
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
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container className={classes.grid} justify="space-around">
                                        <DatePicker margin="normal" label="Select a Date" value={this.state.date} onChange={this.handleDateChange} />
                                    </Grid>
                                </MuiPickersUtilsProvider>
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
        );
    }
}

MilestoneEdit.propTypes= {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MilestoneEdit);
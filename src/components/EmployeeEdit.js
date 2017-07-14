import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from './common';
import {employeeUpdate} from "../actions/EmployeeActions";
import EmployeeForm from './EmployeeForm';
import _ from "lodash";

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })
    }
    onButtonPress() {
        const {name, phone,shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeEdit);
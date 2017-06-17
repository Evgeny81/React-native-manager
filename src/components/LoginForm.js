import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
    onEmailChange=(text) =>{
        this.props.emailChanged(text);
    };
    onPasswordChange=(text) =>{
        this.props.passwordChanged(text);
    };
    onButtonPress= () => {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    };


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}

                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress}>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error } = auth;
    return {
        email, password, berror
    }

};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser})(LoginForm);
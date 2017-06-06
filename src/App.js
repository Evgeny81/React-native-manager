import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDFiJddfBFG01iUYw7VvWyENqnO5thOaS0",
            authDomain: "manager-fc637.firebaseapp.com",
            databaseURL: "https://manager-fc637.firebaseio.com",
            projectId: "manager-fc637",
            storageBucket: "manager-fc637.appspot.com",
            messagingSenderId: "895691581086"
        };
        firebase.initializeApp(config);
    }
    
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        )
    }
}

export default App;
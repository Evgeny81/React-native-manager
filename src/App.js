import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";//applyMiddleware - to use ReduxThunk
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;
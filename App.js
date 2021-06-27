import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {check, PERMISSIONS, request, requestMultiple, RESULTS} from 'react-native-permissions';

class App extends Component {

    constructor() {
        super();
        this.state = {
            status: '',
        };
    }

    componentDidMount() {
        check(PERMISSIONS.ANDROID.CAMERA).then((result) => {
            if (result === RESULTS.GRANTED) {
                this.setState({status: 'Camera Permission Allowed'});

            } else if (result === RESULTS.DENIED) {
                this.setState({status: 'Camera Permission Denied'});

            } else if (result === RESULTS.UNAVAILABLE) {
                this.setState({status: 'Camera Permission Unavailable'});

            } else if (result === RESULTS.BLOCKED) {
                this.setState({status: 'Camera Permission Blocked'});

            } else if (result === RESULTS.LIMITED) {
                this.setState({status: 'Camera Permission Limited'});

            }

        });

    }

    render() {
        return (
            <View>
                <Text>{this.state.status}</Text>
            </View>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}


function mapStateToProps(state) {
    return {
        null: null
    }
}

export default connect(mapStateToProps)(App);



/*
* TODO: add redux and connect
* TODO: add redux thunk middleware
* TODO: add redux promise middleware
* TODO: add redux tool kit and hot reloader
* TODO: aciton and reducer folders
* TODO: and bootsrap render
* TODO: update react version
*
* */




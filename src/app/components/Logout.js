
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Logout extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        window.localStorage.clear()
    }
    
    render() {
        return (
            <div> 
            <h2>You have been successfully Logged out</h2>
            </div>
        )
    }
} 


Logout.defaultProps = {
    
}

Logout.propTypes = {
    
}
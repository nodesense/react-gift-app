
import React, {Component} from "react";
import PropTypes from "prop-types";

import * as restful from '../core/restful';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: []
        }
    }
    
    componentDidMount() {
        restful.getJson("https://0lthykuze3.execute-api.ap-southeast-1.amazonaws.com/Prod/auth-test")
     
        .then (authTest => {
            // alert(JSON.stringify(categories))
             this.setState({
                 account: authTest
             })
            console.log('got data ', authTest)
        })
    }
    
    render() {
        return (
            <div> 
            <h2>Account </h2>
             <p>{JSON.stringify(this.state.account)}</p>
            </div>
        )
    }
} 


Account.defaultProps = {
    
}

Account.propTypes = {
    
}
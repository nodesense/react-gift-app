
import React, {Component} from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom'
 
export default class Authorize extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        console.log(window.location.hash)
        let data = window.location.hash.replace("#","");
        console.log(data);

        const tokens = data.split('&')
            .map (keyValue => keyValue.split('='))
            .forEach (pair => {
                window.localStorage.setItem(pair[0], pair[1])
            })
            
        const params = {}
        for (let i in tokens) {
            params[tokens[i][0]] = tokens[i][1]
        }

        console.log(params);


        if(window.location.hash) {
            // Fragment exists
          } else {
            // Fragment doesn't exist
          }
    }
    
    render() {
        return (
            <Redirect to="/category" />
        )
    }
} 


Authorize.defaultProps = {
    
}

Authorize.propTypes = {
    
}
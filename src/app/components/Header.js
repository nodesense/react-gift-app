
import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';


export default class Header extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            
        }
    }
    
    componentWillMount() {
        var path = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+window.location.port: '');
         
        this.setState ({
            redirectUri: path + '/auth/authorize/',
            logoutUri: path + '/auth/logout/',
        })
         
     }
    
    render() {
        return (
            <div> 
            <h2>Gift app</h2>

                <NavLink to="/" 
                        exact 
                        className="button"  
                        activeClassName="success" >
                        Home
                </NavLink>

                <NavLink to="/category" 
                        exact 
                        className="button"  
                        activeClassName="success" >
                        Category
                </NavLink>


                <NavLink to="/auth/logout" 
                        exact 
                        className="button"  
                        activeClassName="success" >
                        Logout
                </NavLink>


        {/*
                <a href="https://reactapp.auth.ap-southeast-1.amazoncognito.com/login?response_type=code&client_id=24nhkmag3q6c6b43ftss4lpjft&redirect_uri=http://localhost:3000/auth/authorize/" 
                    className="button">Login with Code</a>


                <a href="https://reactapp.auth.ap-southeast-1.amazoncognito.com/oauth2/authorize?response_type=token&client_id=24nhkmag3q6c6b43ftss4lpjft&redirect_uri=http://localhost:3000/auth/authorize/" 
                    className="button">OAuth</a>

            <a href="https://reactapp.auth.ap-southeast-1.amazoncognito.com/logout?client_id=24nhkmag3q6c6b43ftss4lpjft&logout_uri=http://localhost:3000/auth/logout/" 
                    className="button">Logout</a>

            */}
            
            <a href={"https://reactapp.auth.ap-southeast-1.amazoncognito.com/login?response_type=code&client_id=24nhkmag3q6c6b43ftss4lpjft&redirect_uri=" + this.state.redirectUri} 
                    className="button">Login with Code</a>


                <a href={"https://reactapp.auth.ap-southeast-1.amazoncognito.com/oauth2/authorize?response_type=token&client_id=24nhkmag3q6c6b43ftss4lpjft&redirect_uri=" +  this.state.redirectUri} 
                    className="button">OAuth</a>

            <a href={"https://reactapp.auth.ap-southeast-1.amazoncognito.com/logout?client_id=24nhkmag3q6c6b43ftss4lpjft&logout_uri=" + this.state.logoutUri}
                    className="button">Logout</a>


            <hr />
            </div>
        )
    }
} 


Header.defaultProps = {
    
}

Header.propTypes = {
    
}
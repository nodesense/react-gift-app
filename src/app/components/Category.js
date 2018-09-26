
import React, {Component} from "react";
import PropTypes from "prop-types";

import * as restful from '../core/restful';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    
    componentDidMount() {
        restful.getJson("https://0lthykuze3.execute-api.ap-southeast-1.amazonaws.com/Prod/categories")
     
        .then (categories => {
            // alert(JSON.stringify(categories))
            this.setState({
                categories
            })
            console.log('got data ', categories)
        })
    }
    
    render() {
        return (
            <div> 
            <h2>Category Page</h2>
            <ul>
                {
                    this.state.categories.map ( category => (
                        <li key={category.id}>
                            {category.title}
                        </li>
                    ))
                }
            </ul>
            </div>
        )
    }
} 


Category.defaultProps = {
    
}

Category.propTypes = {
    
}
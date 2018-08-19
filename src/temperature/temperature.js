import React , {Component} from 'react';
import './temperature.css';
import Boiling from './boiling.js';
import Display from './display.js';
// import PropTypes from 'prop-types';

class Temperature extends React.Component{
    // static propType = {
    //     hua: PropTypes.number,
    //     she: PropTypes.number
    // }

    constructor(props){
        super(props);
        this.state={
            hua:"",
            she:""
        }
        this.handlehuaChange = this.handlehuaChange.bind(this);
        this.handlesheChange = this.handlesheChange.bind(this);
    }

    handlehuaChange(e){
        this.setState({hua:e.target.value})
    }

    handlesheChange(e){
        this.setState({she:e.target.value})
    }

    render(){
        return(
            <div className="global-style">
                <div className="instructor">
                    显示水是否已经开了，分别有华氏温度和摄氏温度显示
                </div>
                <div>
                    <Display 
                    onhandlehua={this.handlehuaChange}
                    onhandleshe={this.handlesheChange}
                    she={this.props.she}
                    hua={this.props.hua}/>
                </div>
                <div className="content-style">
                    <Boiling CValue='1'/>
                </div>
            </div>
        )
    }
}

export default Temperature;
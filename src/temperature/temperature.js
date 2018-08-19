import React , {Component} from 'react';
import './temperature.css';
import Boiling from './boiling.js';

class Temperature extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="global-style">
                <div className="instructor">
                    显示水是否已经开了，分别有华氏温度和摄氏温度显示
                </div>
                <div className="content-style">
                    <Boiling CValue='1'/>
                </div>
            </div>
        )
    }
}

export default Temperature;
import React , {Component} from 'react';
import './temperature.css';
import Boiling from './boiling.js';
import Display from './display.js';
// import PropTypes from 'prop-types';
// import Formula from './formula.js';

class Temperature extends React.Component{
    // static propTypes = {
    //     hua: PropTypes.number,
    //     she: PropTypes.number
    //   }

    constructor(props){
        super(props);
        this.state={
            hua:"",
            she:""
        }
        this.handlehuaChange = this.handlehuaChange.bind(this);
        // this.handlesheChange = this.handlesheChange.bind(this);
        this.ToHua = this.ToHua.bind(this);
        this.ToShe = this.ToShe.bind(this);
    }

    handlehuaChange(e){
        // var newShe = this.ToShe();
        // console.log(newShe);
        this.setState({
            hua:e.target.value,
            // she:newShe
        });
        

    }

    // handlesheChange(e){
    //     var newHua = this.ToHua();
    //     console.log(newHua);
    //     this.setState({
    //         she:e.target.value,
    //         hua:newHua
    //     });
        
    // }

    // 摄氏度转换为华氏度
    ToHua(){
        return (this.state.she * (9/5) + 32);
    }
    

    // 华氏温度转换为摄氏温度
    ToShe(){
        return ((this.state.hua - 32)* 5/9);
    }

    render(){
        return(
            <div className="global-style">
                <div className="instructor">
                    显示水是否已经开了，分别有华氏温度和摄氏温度显示
                </div>
                <div>
                    {/* <Display 
                    onhandlehua={this.handlehuaChange}
                    onhandleshe={this.handlesheChange}
                    she={she}
                    hua={hua}/> */}
                    <Display onhandlehua={this.handlehuaChange} hua={this.state.hua}/>
                </div>
                <div className="content-style">
                    <Boiling CValue='1'/>
                </div>
            </div>
        )
    }
}

    // Temperature.propType = {
    //     hua: PropTypes.number,
    //     she: PropTypes.number
    // }

export default Temperature;
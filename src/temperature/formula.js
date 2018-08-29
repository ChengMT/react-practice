import React , {Component} from 'react';
import PropTypes from 'prop-types';

// 此文档用于转换温度
// 1F = C*9/5 + 32
// 1C = (F- 32)* 5/9

// 摄氏度转换为华氏度
function ToHua(she){
    return (she * (9/5) + 32);
}

// 华氏温度转换为摄氏温度
function ToShe(hua){
    return ((hua- 32)* 5/9);
}

class ToSheFun extends React.Component{
    constructor(props){
        super(props);
        this.handleToShe = this.handleToShe.bind(this);
    }

    render(){
        var toshe = (this.props.hua- 32)* 5/9;

    }
}


class Formula extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        if( typeof(this.props.hua) != number){
            alert("请输入数字");
        }

        return (
            <div>
                <ToShe hua={this.props.hua}/>
            </div>
        )
    }
}



export default Formula ;
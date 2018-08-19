import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component{
    static propType = {
        hua: PropTypes.number,
        she: PropTypes.number
    }

    constructor(props){
        super(props);
        this.state={
            hua:'',
            she:''
        };
        this.handlehua = this.handlehua.bind(this);
        this.handleshe = this.handleshe.bind(this);
    }

    handlehua(e){
        this.setState({hua : e.target.value});
    }

    handleshe(e){
        this.setState({she : e.target.value});
    }


    render(){
        return(
            <div>
                <div>摄氏度：<input value={this.state.she} onChange={this.handleshe}/>℃</div>
                <div>华氏度：<input value={this.state.hua} onChange={this.handlehua}/>℉</div>
            </div>
        )
    }
}


export default Display ;
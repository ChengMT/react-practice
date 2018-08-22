import React ,{Component} from 'react';
// import PropTypes from 'prop-types';

class Display extends React.Component{
    // static propType = {
    //     value: PropTypes.number
    // }

    constructor(props){
        super(props);
        // this.state={
        //     hua:'',
        //     she:''
        // };
        this.handlehua = this.handlehua.bind(this);
        this.handleshe = this.handleshe.bind(this);
    }

// 打开页面对摄氏度的输入框进行聚焦
    componentDidMount(){
        this.inputShe.focus()
    }

    handlehua(){
        this.props.onhandlehua;
    }

    handleshe(){
        this.props.onhandleshe;
    }


    render(){
        return(
            <div>
                <div>摄氏度：<input value={this.props.she} onChange={this.handleshe} ref={(input)=>this.inputShe=input}/>℃</div>
                <div>华氏度：<input value={this.props.hua} onChange={this.handlehua}/>℉</div>
            </div>
        )
    }
}


export default Display ;
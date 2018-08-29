import React ,{Component} from 'react';
// import PropTypes from 'prop-types';

class Display extends React.Component{
    // static propType = {
    //     value: PropTypes.number
    // }

    constructor(props){
        super(props);
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
                <div>摄氏度：<input value={this.props.she} onChange={this.handleshe} ref={(input)=>this.inputShe=input} placeholder="此处应输入数字" />℃</div>
                <div>华氏度：<input value={this.props.hua} onChange={this.handlehua} placeholder="此处应输入数字" />℉</div>
            </div>
        )
    }
}

// Display.propType = {
//     hua: PropTypes.number,
//     she: PropTypes.number
// };

export default Display ;


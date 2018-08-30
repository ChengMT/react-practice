import React ,{Component} from 'react';



class Display extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.onhandleClick(e.target.value)
    }

    render(){
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        const scaleList = {
            c: 'Celsius摄氏度',
            f: 'Fahrenheit华氏度'
        }
        return(
            <div>
                请在此输入{scaleList[scale]}：
                <input value={temperature} onChange={this.handleClick}  />
            </div>
        )
    }
}


export default Display ;


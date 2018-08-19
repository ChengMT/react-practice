import React,{Component} from 'react';
function Content(props){
    
        return(
            <div>
                {!props.isTogglenOn ? "显示我了啊":null}
            </div>
        )
    

    
}

class Event extends React.Component{
    constructor(props){
        super(props);
        this.state = {isTogglenOn:true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isTogglenOn : !prevState.isTogglenOn
        })
        );
    }

    render(){
        return(
            <div>
                <Content isTogglenOn={this.state.isTogglenOn}/>
                <button onClick={this.handleClick}>
                    {this.state.isTogglenOn ? "显示" :"隐藏"}
                </button>
            </div>
        );
    }
}


export default Event;
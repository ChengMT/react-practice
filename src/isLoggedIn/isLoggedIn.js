import React ,{Component} from 'react';
import Greet from './greet.js';

class IsLoggedIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {isloggedIn : true};
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            isloggedIn : !this.state.isloggedIn
        })
        
    }

    render(){
        const isloggedIn = this.state.isloggedIn;
        let log = '';
        log = <button onClick={this.handleClick}>
            {isloggedIn ? "登录" : "下线"}
        </button>
        return (
            <div>
                <Greet isloggedIn={isloggedIn}/>
                {log}
            </div>
        )
    }


}

export default IsLoggedIn;
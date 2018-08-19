import React, { Component } from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    componentDidMount(){
        this.timer = setInterval(this.tick,1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                <h1>hello world</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }

}

export default Clock;
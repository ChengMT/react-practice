import React ,{Component} from  'react';

function UserGreeting() {
    return <h1>Welcome back!</h1>;
}
function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

class Greet extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var display = '';
        if(this.props.isloggedIn){
            display = <GuestGreeting />
        }else{
            display = <UserGreeting />
        }
        return(
            <div>
                {display}
            </div>
        )
    }

}

export default Greet;
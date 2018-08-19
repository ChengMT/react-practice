// 以下是判断是否水为沸腾，判断100℃以上为沸腾
import React, {Component} from 'react';

class Boiling extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {/* 目前水的状态：{this.props.CValue}  */}
                
                目前水的状态：{this.props.CValue >= 100 ? <span className="boildinged">"已烧开"</span> :<span className="no-boilding">"未烧开"</span>} 
            </div>
        )
    }
    
}

export default Boiling;
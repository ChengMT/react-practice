// 接收所有的 用户输入
import React ,{Component} from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(e){
        this.props.handelHidde(e.target.value);
    }

    handleChange(e){
        this.props.handleSearch(e.target.value);
        
    }

    render(){
        return(
            <div>
                <input type="text" className ='search-table' size='28' placeholder="Search..." value={this.props.searcheText} onChange={this.handleChange}/>
                <div className='row'>
                    <input className='radio' type='checkbox' onChange={this.handleClick}/><span className='text'> Only show prodcts in stock</span>
                </div>
                
            </div>
        )
    }
}

export default SearchBar;
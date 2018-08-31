// 包含整个示例
import React ,{Component} from 'react';
import './productTable.css';
import SearchBar from './searchBar.js';
import ProductTable from './productTable.js';




class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:'',
            isToggled:false
        }
        this.isclick = this.isclick.bind(this);
    }

    isclick(){
        this.setState({isToggled:!this.state.isToggled})
    }

    render(){
        const list = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];

        const isToggled=this.state.isToggled;
          
        return(
            <div className='global'>
                <SearchBar handelHidde={this.isclick}/>
                <ProductTable list={list} isToggled={isToggled}/>
            </div>
        )
    }
}

export default FilterableProductTable;
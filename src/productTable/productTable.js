// 根据 用户输入 显示和过滤 数据集合
import React ,{Component} from 'react';
import ProductCategoryRow from './productCategoryRow.js';
import ProductRow from './productRow.js';

class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.filterFunction = this.filterFunction.bind(this);
        this.conditionS = this.conditionS.bind(this);
        this.conditionE = this.conditionE.bind(this);
        this.listDisplay =this.listDisplay.bind(this);
        this.conditionSt = this.conditionSt.bind(this);
    }

    // 商品过滤的函数，有2个形参，分别是商品全部目录数组，另一个参数是过滤的方法函数
    filterFunction(list,condition){
        // 分别筛选出Sporting和Electronics的商品
        let result = list.filter(condition);
        // 点击Only show prodcts in stock的按钮，则隐藏缺货的
        if(this.props.isToggled){
            result = result.filter(this.conditionSt);
        }
        // 分别用ProductRow来渲染每一行的商品
        const resultDisplay = result.map(this.listDisplay);
        return resultDisplay;
        
    }

    // 过滤Sporting Goods的商品
    conditionS(vaule){
        return vaule.category === 'Sporting Goods';
    }

    // 过滤Electronics的商品
    conditionE(vaule){
        return vaule.category === 'Electronics';
    }

    // 过滤后每一行商品得显示
    listDisplay(vaule){
        const a = <ProductRow prodcutName={vaule.name} prodcutPrice={vaule.price} productStocked={vaule.stocked} key={vaule.name}/>
        return a;
    }

    // 过滤掉缺货得商品
    conditionSt(vaule){
        return vaule.stocked === true;
    }

    render(){
        return(
            <div>
                <div className='information'>
                    <span className='name'>Name</span>Price
                </div>
                <ProductCategoryRow content='Sporting Price'/>
                {this.filterFunction(this.props.list,this.conditionS)}
                <ProductCategoryRow content='Electronics'/>
                {this.filterFunction(this.props.list,this.conditionE)}
            </div>
        )
    }
}

export default ProductTable;
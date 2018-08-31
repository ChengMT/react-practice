//  显示每个 类别 的标题
import React ,{Component} from 'react';

class ProductCategoryRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='ProductCategoryRow'>
                {this.props.content}
            </div>
        )
    }
}

export default ProductCategoryRow;
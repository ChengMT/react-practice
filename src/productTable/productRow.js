// 显示每个 产品 的行数据
import React ,{Component} from 'react';

class ProductRow extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        // if(! this.props.productStocked){
        //     document.getElementsByClassName('prodcutlist').item(0).style.backgroundColor = 'red';
        // }
        // console.log(document.getElementsByClassName('prodcutlist').style);
        const productStocked = this.props.productStocked;

        return(
            <div className='ProductRow'>
                <div className={productStocked ===false?'prodcutlistRed':'prodcutlist'}>{this.props.prodcutName}</div>
                {/* <div className='prodcutlist'>{this.props.prodcutName}</div> */}
                <div className={productStocked ===false?'prodcutlistRed':'prodcutlist'}>{this.props.prodcutPrice}</div>
            </div>
        )
    }
}

export default ProductRow;
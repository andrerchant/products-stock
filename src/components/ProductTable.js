import React from 'react';
import ProductRow from './ProductRow';

class ProductCategoryRow extends React.Component {
    render(){
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach( (product)=> {
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow 
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(
                <ProductRow 
                    product={product}
                    key={product.name}
                />
            )
        } )
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ProductTable;
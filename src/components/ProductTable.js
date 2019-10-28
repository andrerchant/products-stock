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
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach( (product)=> {
            /* Fix to Case sensitive filter */
            let pNombre = (product.name).toLowerCase();
            if(pNombre.indexOf(filterText.toLowerCase())===-1){
                return;
            }
            if(inStockOnly && !product.stocked){
                return;
            }
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
            );
            lastCategory= product.category;
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
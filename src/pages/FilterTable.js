import React from 'react';

import Searchbar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';

import './styles/FilterTable.css'

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div className="table">
                <Searchbar />
                <ProductTable 
                    products={this.props.products}
                />
            </div>
        );
    }
}

export default FilterableProductTable;
import React from 'react';

class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterTextChange= this.handleFilterTextChange.bind(this);
        this.handleInStockChange= this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e){
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <form className="SearchBar">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input 
                        type="checkbox" 
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange}
                    />
                    {' '}
                    Only show products in stock {this.props.inStockOnly ? <span className="show">actived</span> : <span className="show off">off</span> }
                </p>
            </form>
        );
    }
}

export default Searchbar;
import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="filter">
        <div className="filter-result">Total {this.props.count} Products</div>
        <div className="filter-sort">
          Order by{" "}
          <select value={this.props.sorts} onChange={this.props.sortProducts}>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-type">
          Filter type{" "}
          <select value={this.props.type} onChange={this.props.filterProducts}>
            <option value="">All</option>
            <option value="clothing">Cloths</option>
            <option value="jewelery">Jewellery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;

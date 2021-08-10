import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id} className="product-card">
              <div className="product">
                <a href={"#" + product.id}>
                  <p>{product.title}</p>
                  <img src={product.image} alt={product.title}></img>
                </a>
                <div className="product-price">
                  <div>$ {product.price}</div>
                  <button className="button primary">Add to Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Products;

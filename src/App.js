//feature 01

import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      type: "",
      sorts: "",
    };
  }
  sortProducts = (event) => {
    //implement
    console.log(event.target.value);
    this.setState({
      sorts: event.target.value,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          event.target.value === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : event.target.value === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id > b.id
            ? 1
            : -1
        ),
    });
  };
  filterProducts = (event) => {
    //implement
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ type: event.target.value, products: data.products });
    } else {
      this.setState({
        type: event.target.value,
        products: data.products.filter((product) =>
          product.category.includes(event.target.value)
        ),
      });
    }
  };
  render() {
    const { products, type, sorts } = this.state;
    return (
      <div className="grid-container">
        <header>
          <a href="/">Ranga Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={products.length}
                type={type}
                sort={sorts}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={products} />
            </div>
            <div className="sidebar">Cart</div>
          </div>
        </main>
        <footer>2020-21 @ All rights are reserved.</footer>
      </div>
    );
  }
}

export default App;

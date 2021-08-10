//feature 01

import React from "react";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="grid-container">
        <header>
          <a href="/">Ranga Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
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

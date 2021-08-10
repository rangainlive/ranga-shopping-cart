import React, { useState } from "react";
import data from "./data.json";

function AppFunctionalComponent() {
  const [info, setInfo] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

  return (
    <div className="grid-container">
      <header>
        <a href="/"> Ranga Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main"> Products</div>
          <div className="sidebar"> Cart</div>
        </div>
      </main>
      <footer>2020-21 @ All rights are reserved.</footer>
    </div>
  );
}

export default AppFunctionalComponent;

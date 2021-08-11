import React, { Component } from "react";
import Badge from "@material-ui/core/Badge";
import Fade from "react-reveal/Fade";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noOfItems: 0,
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div className="card-checkout">
          <div className="card-header">
            <div>Shopping Cart</div>
            <div>
              {cartItems.length === 0 ? (
                <div className="selection-msg">
                  <Badge badgeContent={0} color="error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart-x-fill cart-symbol"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                  </Badge>
                </div>
              ) : (
                <div className="selection-msg">
                  <Badge badgeContent={cartItems.length} color="error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart-check-fill cart-symbol"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </Badge>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="cart">
              <Fade left cascade>
                <ul className="cart-items">
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <div>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div>
                        <div>{item.title}</div>
                        <div className="right">
                          ${item.price} x {item.count}{" "}
                          <button
                            className="button"
                            onClick={() => this.props.removeFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
          </div>
          <div className="btn-checkout">
            {cartItems.length !== 0 && (
              <div>
                <div className="cart">
                  <div className="total">
                    Total amount: ${" "}
                    {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                  </div>
                </div>
                {cartItems.length > 0 ? (
                  <button
                    className="button primary"
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                  >
                    Proceed
                  </button>
                ) : (
                  <p>No items in your Cart. Add items..</p>
                )}
              </div>
            )}
          </div>
        </div>

        {this.state.showCheckout && (
          <Fade right cascade>
            <div className="card-checkout">
              <div className="cart">
                <div>Sign Up</div>
                <form onSubmit={this.createOrder}>
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <button className="button primary" type="submit">
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </Fade>
        )}
      </div>
    );
  }
}

export default Cart;

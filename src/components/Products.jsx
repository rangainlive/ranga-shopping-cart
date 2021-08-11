import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product.id} className="product-card">
                <div className="product">
                  <a
                    href={"#" + product.id}
                    onClick={() => this.openModal(product)}
                  >
                    <p>{product.title}</p>
                    <img src={product.image} alt={product.title}></img>
                  </a>
                  <div className="product-price">
                    <div>$ {product.price}</div>
                    <button
                      className="button primary"
                      onClick={() => this.props.addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title} />
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>{product.category}</p>
                  <div>
                    <p>$ {product.price}</p>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
export default Products;

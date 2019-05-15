import React, { Component } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const{id, title, img, price, inCart} = this.props.product;
    return (
      <div className = "card">
      <div className = "img-container p-5"
      onClick ={() => console.log("you clicked me on the image container")}>
      <Link to = "/details">
      <h3></h3>
      <img src={img} alt="product" className="card-img-top"/>
      </Link>
      <button className="cart-btn" disabled={inCart?true:
        false} onClick={() => {console.log("added to the cart");
      }} >
      {inCart?(<p className="text-capitalize mb-0" disabled>
      {" "}
      in art
      </p>
     ):(
       <i className="fas fa-cart-plus"/>
     )}
      </button>
      </div>
      {/* card footer */}
      <div className="card-footer.d-flex.justify-content-between">
      <p className="align-self-center mb-0">
      {title}
      </p>
      <h5 className = "text-blue font-italic mb-0">
        <span className="mr-1">$</span>
        {price}
        </h5>
      </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

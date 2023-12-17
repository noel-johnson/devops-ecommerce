import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productdetails: [],
    };
  }

  componentDidMount() {
    // Get Product ID from URL
    var productid = window.location.pathname;
    productid = productid.split("product/");

    axios
      .get("http://35.182.117.158:3000/Products/" + productid[1])
      .then((res) => {
        // Storing product detail in state array object
        this.setState({ productdetails: res.data[0] });
      })
      .catch((error) => {
        console.error("API Error:", error);
        // Handle the error, e.g., show a user-friendly message
      });
  }

  render() {
    const { title, image, price, description } = this.state.productdetails;

    return (
      <div className="mt-3 mb-3">
        <h1>{title}</h1>
        <img
          className="d-block img-fluid"
          src={"http://35.182.117.158:3000/Products/images/" + image}
          alt={image}
        />
        <h5 className="mt-3 mb-3">{price}</h5>
        <p className="mt-3 mb-3">{description}</p>
      </div>
    );
  }
}

export default Product;

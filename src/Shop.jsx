import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//For API Requests
import axios from "axios";

//Import react routes and its other modules
import { Link } from "react-router-dom";

class Shop extends React.Component {
  //Declare state varible to store request data
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    // Get all products details in bootstrap table
    axios
      .get("http://35.182.117.158:3000/Products")
      .then((res) => {
        console.log("API Response:", res.data);
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }

  render() {
    return (
      <div className="shop">
        <div className="row">
          {this.state.data.map((result, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#">
                    <img
                      className="card-img-top"
                      src={
                        "http://35.182.117.158:3000/Products/images/" +
                        result.image
                      }
                      alt={result.image}
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">{result.title}</a>
                    </h4>
                    <h5>{result.price}</h5>
                    <p className="card-text">{result.description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                  <div className="overlay"></div>
                  <div className="button">
                    {" "}
                    <Link to={"/product/" + result.id}>View Product</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Shop;

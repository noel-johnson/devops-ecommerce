import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Product from "./Product";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="MainDiv">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Product
              </Link>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h1 className="my-4">Product Shop</h1>
                <div className="list-group">
                  <Link to="/" className="list-group-item">
                    Category 1
                  </Link>
                  <Link to="/" className="list-group-item">
                    Category 2
                  </Link>
                  <Link to="/" className="list-group-item">
                    Category 3
                  </Link>
                </div>
              </div>

              <div className="col-lg-9">
                <Routes>
                  <Route path="/" element={<Shop />} />
                  <Route path="/product/:id" element={<Product />} />
                </Routes>
              </div>
            </div>
          </div>

          <footer className="py-5 bg-dark text-center">
            <div className="container">
              <p className="m-0 text-white">
                Copyright &copy; Your Website 2023
              </p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Products from "./Products.jsx";

const Page = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" component={Products} />
      </BrowserRouter>
    </div>
  );
};

export default Page;

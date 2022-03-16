import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

import Routes from "../routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div
            style={{
              backgroundColor: "#d8cb8221",
              width: "100%",
              height: "100%",
            }}
          >
            <Header {...props} />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
            <ProductViewModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;

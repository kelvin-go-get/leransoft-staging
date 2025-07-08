import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home Page</h1>
              <p>Welcome to the home page!</p>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <h1>About Page</h1>
              <p>Learn more about us on this page.</p>
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <h1>Contact Page</h1>
              <p>Get in touch with us!</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;

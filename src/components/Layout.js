import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Place your navbar component here */}

      <nav>
        <h1>Navbar</h1>
      </nav>

      {/* Render the content of the specific page */}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;

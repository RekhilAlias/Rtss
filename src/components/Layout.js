import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Place your navbar component here */}

      <nav>
        <h1>Navbar</h1>
      </nav>

      {/* Render the content of the specific page */}
      {children}

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default Layout;

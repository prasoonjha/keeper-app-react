import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();

  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}

export default Footer;

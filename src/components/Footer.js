import React from "react";
import "./myStyles.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
                  <h3>My FED Blog</h3>
                  <p>Page Credits : GADDAM SHARMILA ~20BQ1A0554</p>
            <p>copyright &copy; {new Date().getFullYear()} <a href=""> FED Blog</a>  </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
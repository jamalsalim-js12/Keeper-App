import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h3>
        Made with ❤️ by{" "}
        <a href="https://github.com/jamalsalim-js12" target="blank">
          Jamal Salim
        </a>
      </h3>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Footer;

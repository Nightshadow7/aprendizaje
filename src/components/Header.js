import React from "react";

const Header = (props) => {
  return (
    <header className="App-header">
      <div className="images-container">
        <img src={props.logo} className="App-logo" alt="logo" />
        <img src={props.keyConceptsImage} alt="Medal badge with a star" />
      </div>
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;

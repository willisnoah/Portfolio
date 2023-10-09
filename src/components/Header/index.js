import React from 'react';
import coverImage from '../../assets/cover/cover-image2.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Noah Willis</h1>
      <img src={coverImage} alt="blue background"></img>
      {props.children}
    </header>
  );
}

export default Header;

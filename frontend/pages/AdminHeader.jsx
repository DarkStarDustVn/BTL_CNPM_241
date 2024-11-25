// components/Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white flex items-center justify-end p-4">
      <div className="flex items-center space-x-4">
        <button className="p-2 w-8">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className="p-2">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button className="p-2">
          <FontAwesomeIcon icon={faUserCircle} className="text-gray-700" size="lg" />
        </button>
      </div>
    </header>
  );
};

export default Header;
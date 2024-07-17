import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInbox, faUser,faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="fixed w-full text-white " >
      <nav className="container mx-auto flex justify-center py-4">
        <ul className="flex space-x-4">
          <li className="home active">
            <a href="#home" className="hover:underline p-6 ">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
          </li>
          <li className="about">
            <a href="#about" className="hover:underline p-6">
<FontAwesomeIcon icon={faInfoCircle}  className="mr-2" />

              About
            </a>
          </li>
          <li className="projects">
            <a href="#projects" className="hover:underline p-6">
              <FontAwesomeIcon icon={faInbox} className="mr-2" />
              Projects
            </a>
          </li>
          <li className="contact">
            <a href="#contact" className="hover:underline p-6">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInbox, faUser,faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="fixed w-full text-white top-0 z-50 bg-black py-1 px-4  text-center transition-all duration-300 " >
      <nav className="container mx-auto flex justify-center py-4">
        <ul className="flex a70:space-x-5 space-x-8">
          <li className="home active">
            <a href="#home" className="hover:underline svg p-6 a70:p-0 ">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
          </li>
          <li className="about">
            <a href="#about" className="hover:underline  p-6 svg a70:p-0">
<FontAwesomeIcon icon={faInfoCircle}  className="mr-2" />

              About
            </a>
          </li>
          <li className="projects">
            <a href="#projects" className="hover:underline svg p-6 a70:p-0">
              <FontAwesomeIcon icon={faInbox} className="mr-2" />
              Projects
            </a>
          </li>
          <li className="contact">
            <a href="#contact" className="hover:underline svg p-6 a70:p-0">
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

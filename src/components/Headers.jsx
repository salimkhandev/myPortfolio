import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="fixed w-full text-white top-0 z-50 bg-black py-1 px-4 border-b-[3px] border-gray-600 text-center transition-all duration-300 " >
      <nav className="container mx-auto flex justify-center py-4 ">
        <ul className="flex a70:space-x-2 a70+:space-x-12 " >
          <li className="home active">
            <a href="#home" className="svg p-6 a70:p-0 ">
              <FontAwesomeIcon icon={faHome} className="mr-2  a70:inline smaller:hidden" />
              Home
            </a>
          </li>
          <li className="about">
            <a href="#about" className="p-6 svg a70:p-0">

              About
            </a>
          </li>
          <li className="projects">
            <a href="#projects" className=" svg p-6 a70:p-0">
              Projects
            </a>
          </li>
          <li className="contact">
            <a href="#contact" className=" svg p-6 a70:p-0">
              Contact
            </a>
          </li>
          <li className="va">
            <a href="#va" className=" svg p-6 a70:p-0">
              VA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

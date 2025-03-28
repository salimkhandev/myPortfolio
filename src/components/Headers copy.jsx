import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="fixed w-full text-white top-0 z-50 bg-gradient-to-r from-gray-900 to-black py-1 px-4 backdrop-blur-sm bg-opacity-90 border-b border-gray-800 text-center transition-all duration-300">
      <nav className="container mx-auto flex justify-center py-3">
        <ul className="flex a70:space-x-2 a70+:space-x-20">
          <li className="home active relative">
            <a href="#home" className="svg p-6 a70:p-0 hover:text-blue-400 transition-all duration-300 relative after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              <FontAwesomeIcon icon={faHome} className="mr-2 a70:inline smaller:hidden" />
              Home
            </a>
          </li>
          <li className="about relative">
            <a href="#about" className="p-6 svg a70:p-0 hover:text-blue-400 transition-all duration-300 relative after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              About
            </a>
          </li>
          <li className="projects relative">
            <a href="#projects" className="svg p-6 a70:p-0 hover:text-blue-400 transition-all duration-300 relative after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              Projects
            </a>
          </li>
          <li className="contact relative">
            <a href="#contact" className="svg p-6 a70:p-0 hover:text-blue-400 transition-all duration-300 relative after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              Contact
            </a>
          </li>
          <li className="va relative">
            <a href="#va" className="svg p-6 a70:p-0 hover:text-blue-400 transition-all duration-300 relative after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              VA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

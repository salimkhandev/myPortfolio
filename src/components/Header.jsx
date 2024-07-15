
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-center py-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

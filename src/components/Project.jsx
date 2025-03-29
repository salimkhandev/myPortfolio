import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";

const Project = ({ title, description, link, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-6 space-y-4">
        {/* Title with gradient on hover */}
        <h3 className="text-xl font-bold tracking-tight group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
        >
          <span className="text-sm font-semibold">Visit Project</span>
          <FontAwesomeIcon 
            icon={faExternalLinkAlt} 
            className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" 
          />
        </a>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Project;

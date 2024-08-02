import PropTypes from "prop-types";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = (props) => {
  return (
    <div

      
   
      className=" p-4 text-white mb-4 ">
      <h3 className="text-2xl font-bold roboto-slab pb-1 ">{props.title}</h3>
      <p className="text-gray-400">{props.description}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline flex items-center justify-center"
      >
        View Project
        <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: '8px' }} />
      </a>
    </div>
  );
};
Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Project;

import PropTypes from "prop-types";

const Project = (props) => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: 'fixed'
      }
      } className="border p-4 text-white mb-4">
      <h3 className="text-2xl font-bold">{props.title}</h3>
      <p>{props.description}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
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

import { ReactTyped } from "react-typed";

const Home = () => {
  const strings = [
    "<span class='highlight'>I'm</span> a Web Developer",
    "<span class='highlight'>I'm</span> a UI/UX Developer",
    "<span class='highlight'>I'm</span> a Backend Developer",
    "<span class='highlight'>I'm</span> a Tester"
  ]
  return (
    <div 
       className="py-20 text-white bg-black bg-opacity-70"
   
    >      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center  p-6 rounded-lg "
        
    

        >
          
          <img
            src="/profilePic.jpeg"
            className="h-24 w-24 md:h-36 md:w-36 mx-auto rounded-full mb-6"
            alt="this is the logo"
          />
          <span className="text-5xl a70:text-5xl black-ops-one-regular svg transition-colors duration-300 ease-in-out hover:text-green-900 font-bold animate-bounce">
            Welcome
          </span>
          <p className="text-2xl md:text-3xl mt-4">Salim Khan</p>
          <p className="mt-4 text-lg">
            <ReactTyped
              className="  text-white"
              strings={strings}
              typeSpeed={40}
              backSpeed={50}
              loop
            /></p>
          <p className="mt-4 text-lg">Explore my work below!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

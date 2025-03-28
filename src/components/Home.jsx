import { ReactTyped } from "react-typed";
import "animate.css"
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animations
    });
  }, []);
  const strings = [
    "<span class='highlight'>I'm</span> a frontend developer",
    "<span class='highlight'>I'm</span> a backend developer",
    "<span class='highlight'>I'm</span> a UI/UX designer",
    "<span class='highlight'>I'm</span> a tester"
  ]
  return (
    <div data-aos="fade-up" className="py-20 text-white bg-black bg-opacity-70">   
         <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center  p-6 rounded-lg "
      
        >
          
          <img
            src="/profilePic.jpg"
            className="h-52 w-52 md:h-48 md:w-48 mx-auto rounded-full mb-6 animate__animated animate__bounceInUp shadow-[0_0_20px_5px_rgba(59,130,246,0.5)]"
            alt="this is the logo"
          />



      
          <p className=" md:text-3xl mt-4 stylish text-5xl a70:text-5xl  svg transition-colors   hover:text-green-500 font-bold animate__animated animate__backInDown ">Salim Khan</p>
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

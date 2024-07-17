const Home = () => {
  return (
    <div 
    
       className="py-20 parent-div bg-gradient-to-r from-blue-900 to-teal-500 text-white "
      style={{
        backgroundImage: "url('/public/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
}
}>      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center p-6 rounded-lg bg-opacity-80 bg-gray-900 shadow-lg">
          <img
            src="./logo.jpg"
            className="h-24 w-24 md:h-36 md:w-36 mx-auto rounded-full mb-6"
            alt="this is the logo"
          />
          <h1 className="text-5xl md:text-6xl font-bold animate-bounce">
            Welcome to My Portfolio
          </h1>
          <p className="text-2xl md:text-3xl mt-4">Salim Khan</p>
          <p className="mt-4 text-lg">Developer</p>
          <p className="mt-4 text-lg">Explore my work below!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

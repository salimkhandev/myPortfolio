const Home = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-900 to-teal-500 text-white">
      <div className="flex justify-center h-10">
        <img
<<<<<<< HEAD
          src="/src/components/logo.jpg"
          className="h-40 rounded-full bg-transparent"
          alt="Logo"
=======
          src="/src/assets/logo.jpg"
          className="h-40 rounded-full"
          alt="this logo"
>>>>>>> 29021f3287036742c1a6c5e4359e0b39e6a74c12
        />
      </div>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r  from-blue-900 to-teal-500 text-white"
      >
        <div className="text-center p-6 rounded-lg bg-opacity-80 bg-gray-900 shadow-lg">
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

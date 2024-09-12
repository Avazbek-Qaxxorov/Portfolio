import "./Home.css"

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">Hi, Im <span className="text-yellow-300">Avazbek</span></h1>
        <p className="mt-4 text-2xl text-white">Creative Web Developer</p>
        <a href="#projects" className="mt-8 inline-block bg-white text-blue-500 py-3 px-6 rounded-full text-lg font-bold hover:bg-yellow-400">See My Work</a>
      </div>
    </section>
  );
};

export default Home;

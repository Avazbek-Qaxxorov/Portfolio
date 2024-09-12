import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 py-4 shadow-lg">
      <ul className="flex justify-center space-x-6">
        <li><a href="#home" className="text-white text-lg">Home</a></li>
        <li><a href="#about" className="text-white text-lg">About</a></li>
        <li><a href="#projects" className="text-white text-lg">Projects</a></li>
        <li><a href="#contact" className="text-white text-lg">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import "./Projects.css";
import Rentcar from "../../assets/Images/rent-car.webp";
import Uzoq from "../../assets/Images/uzoq.jpg";
import Teatr from "../../assets/Images/teatr.jpg";
import Coffee from "../../assets/Images/coffee.jpg"

const projects = [
  { id: 1, title: "Rent Car", description: "This is a cool project", link: "https://rent-car-3.vercel.app/", img: Rentcar },
  { id: 2, title: "Uzoq Sharq yetkazib beruvchi", description: "Far East Supplier", link: "https://2-oy-imtihon-rho.vercel.app/", img: Uzoq },
  { id: 3, title: "Teatr", description: "Theater", link: "https://teatr-figma.vercel.app/", img: Teatr },
  { id: 4, title: "Coffee Roasters", description: "Coffee Roasters", link: "https://media-woad-seven.vercel.app/", img: Coffee },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto text-center">
        <h2>My Projects</h2>
        <div className="card">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.img} alt={project.title} className="project-img" />
              <div className="p-4">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

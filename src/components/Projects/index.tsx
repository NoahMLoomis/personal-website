import { Grid } from "@mui/material";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Time Analysis",
      desc: "An analysis of time use around the world",
      img: "/src/assets/hourglass.jpg",
      tech: ["Next.js", "MongoDB"],
      src: "https://github.com/NoahMLoomis/Time-data-analysis",
      liveLink: "http://data-analysis-five.vercel.app/",
      key: 0,
    },
    {
      title: "PHP sucks facts",
      desc: "PHP sucks. I know it, you know it, your mom knows it",
      img: "/src/assets/phpsucks.png",
      tech: ["Express", "React", "MongoDB"],
      src: "https://github.com/NoahMLoomis/php-sucks-facts",
      liveLink: "https://phpsucksfacts.herokuapp.com/",
      key: 1,
    },
    {
      title: "E-commerce store",
      desc: "A full stack e commerce store",
      img: "/src/assets/cart-outline.png",
      tech: ["C#", ".NET", "SQL"],
      src: "https://github.com/NoahMLoomis/Ecommerce-Store",
      key: 2,
    },
    {
      title: "Titanic  ML",
      desc: "Machine learning to determine who lives",
      img: "/src/assets/titanic.jpg",
      tech: ["Python", "ML"],
      src: "https://github.com/NoahMLoomis/TitanicML",
      key: 3,
    },
  ];

  return (
    <div className="projectsContainer">
      <h2>
        Projects
        <span className="proud">
          -<span className="proud_italics"> Mostly</span> Things I'm Proud Of
        </span>
      </h2>
      <Grid container spacing={2}>
        {projects.map((p) => (
          <Grid item xs={12} sm={6} md={4} sx={{ px: "4.5em" }} key={p.key}>
            <ProjectCard
              title={p.title}
              desc={p.desc}
              img={p.img}
              tech={p.tech}
              src={p.src}
              key={p.key}
              liveLink={p.liveLink}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;

import React from "react";
import { projects } from "../datas/Projects.json";

function Projects() {
  return (
    <div className="btn rounded-lg inline-block">
      <div className="btn-in rounded-lg">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(/assets/png/BODY1.png)`,
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="title2">Projects</h2>
          <br />
          <p className="text-xl font-light">Here are somes of my projects :</p>
          <br />
          <div className="projects-card grid grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                className="flex flex-col items-center justify-center"
                key={project.title}
              >
                <h2 className="text-base hover:text-w-purple">
                  <a href={project.link}>{project.title}</a>
                </h2>
                <br />
                <img
                  className="rounded-lg"
                  src={project.img}
                  alt={project.title}
                />
                <br />
                <p className="text-center">{project.description}</p>
                <br />
                <p className="text-xs">{project.techno}</p>
                <br />
                <p className="github btn rounded-lg">
                  <a className="btn-in rounded-xl" href={project.github}>
                    <img
                      className="w-8"
                      src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                      alt={project.title}
                    />
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

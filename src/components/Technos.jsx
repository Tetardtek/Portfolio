import React from "react";
import { tools } from "../datas/Tools.json";
import { technos } from "../datas/Technos.json";

export default function Technos() {
  return (
    <div className="btn rounded-lg inline-block">
      <div className="btn-in rounded-lg">
        <h2 className="title2">Technos :</h2>
        <br />
        <div className="techno inline-block">
          {technos.map((techno) => (
            <div className="btn rounded-lg" key={techno.name}>
              <div className="btn-in rounded-lg">
                <h5 className="hover:text-w-purple">
                  <a href={techno.link}>{techno.name}</a>
                  <a href={techno.link}>
                    <img className="w-8" src={techno.img} alt={techno.name} />
                  </a>
                </h5>
              </div>
            </div>
          ))}
        </div>
        <h2 className="title2">Tools :</h2>
        <br />
        <div className="tools inline-block">
          {tools.map((tool) => (
            <div className="btn rounded-lg" key={tool.name}>
              <div className="btn-in rounded-xl">
                <h5 className="hover:text-w-purple">
                  <a href={tool.link}>{tool.name}</a>
                </h5>
                <a href={tool.link}>
                  <img className="w-8" src={tool.img} alt={tool.name} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

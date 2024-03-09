import React from "react";
import { badges } from "../datas/Badges.json";

export default function Mentions() {
  return (
    <div className="btn rounded-lg inline-block">
      <div className="btn-in rounded-lg">
        {badges.map((badge) => (
          <div className="btn rounded-lg" key={badge.name}>
            <div className="btn-in rounded-lg">
              <h5 className="hover:text-w-purple">
                {badge.name}
                <img className="w-8" src={badge.image} alt={badge.name} />
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

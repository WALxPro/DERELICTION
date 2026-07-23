import React from "react";
import "./RotatingCard.css";

const RotatingCard = ({ c }) => {
  const Icon = c.icon;

  return (
    <div className="card">
      <div className="card-main">
        <div className="info-card">
          <div className="icon-circle">
            <Icon size={28} strokeWidth={1.5} />
          </div>

          <h4>{c.title}</h4>

          <p className="text-secondary">{c.text}</p>
        </div>
      </div>
    </div>
  );
};

export default RotatingCard;

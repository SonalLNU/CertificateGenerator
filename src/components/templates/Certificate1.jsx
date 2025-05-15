// Template 1: Blue Theme - Elegant Serif Font
import "./Certificate1.css";
import React from "react";

 const Certificate1 = React.forwardRef(({name,date,signature,description},ref)  => {
  return (
    <div ref={ref} className="certificate-container blue-theme">
      <h1 className="title">Certificate of Achievement</h1>
      <p className="subtitle">This certifies that</p>
      <h2 className="name">{name}</h2>
      <p className="description">
        {description}
      </p>
      <div className="footer">
        <p>{date}</p>
        <p>{signature}</p>
      </div>
    </div>
  );
});

export default Certificate1;
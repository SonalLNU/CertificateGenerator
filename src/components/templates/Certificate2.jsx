// Template 2: Green Theme - Handwritten Style
import "./Certificate2.css";
import React from "react";
const Certificate2 = React.forwardRef(({name,date,signature,description},ref)=> {
  return (
    <div ref={ref} className="certificate-container green-theme">
      <h1 className="title">Award of Excellence</h1>
      <p className="subtitle">Proudly presented to</p>
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
})

export default Certificate2;
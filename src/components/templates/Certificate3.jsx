// Template 3: Gold Theme - Modern Font
import "./Certificate3.css";
import React from "react";

const Certificate3 = React.forwardRef(({name,date,signature,description},ref) =>  {
  return (
    <div ref={ref} className="certificate-container gold-theme">
      <h1 className="title">Certificate of Participation</h1>
      <p className="subtitle">Presented to</p>
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

export default Certificate3;
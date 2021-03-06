import React from "react";

const DisplayQuote = (props) => (
    
      <div className="box">
        <p className="tag">{props.tag}</p>
         <div className="content"><p><i className="fas fa-quote-left"></i>  {props.content}</p></div>
        <p className="name">-{props.author}</p>
    </div>
  
);

export default DisplayQuote;
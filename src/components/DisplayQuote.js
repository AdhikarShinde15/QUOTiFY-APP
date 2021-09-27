import React from "react";

const DisplayQuote = (props) => (
    <div>
         <p>{props.tag}--{props.content}-{props.author}</p>
    </div>
);

export default DisplayQuote;
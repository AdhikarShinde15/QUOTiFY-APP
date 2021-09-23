import React from "react";

const DisplayQuote = (props) => (
    <div>
         <p>{props.content}-{props.author}</p>
    </div>
);

export default DisplayQuote;
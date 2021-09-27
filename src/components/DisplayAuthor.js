import React from "react";


const DisplayAuthor = (props) => (
    <div>
         <p>{props.name}--{props.bio}
             <a href={props.link} target="_blank"   >Bio Details</a>
         </p>
    </div>
);

export default DisplayAuthor;
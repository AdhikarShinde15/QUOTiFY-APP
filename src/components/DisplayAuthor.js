import React from "react";


const DisplayAuthor = (props) => (
    <div className="box-author">
         <p className="name-author">{props.name}</p>
         <p className="bio"><i className="fas fa-info-circle"></i> {props.bio}</p>
         <p><a className="link" href={props.link} target="_blank"   ><i className="fab fa-wikipedia-w"></i> Bio Details</a>
</p>
    </div>
);

export default DisplayAuthor;
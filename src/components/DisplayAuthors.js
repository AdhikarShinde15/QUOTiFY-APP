import React from "react";
import DisplayAuthor from "./DisplayAuthor";

const DisplayAuthors = (props) => (
    <div className="grid-author">
        {
        props.authors.map((author) => (
          <DisplayAuthor
           key={author._id}
           name={author.name}
           bio={author.bio}
           link={author.link}
           />
        ))
      }
    </div>
);

export default DisplayAuthors;
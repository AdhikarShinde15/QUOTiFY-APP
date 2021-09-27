import React from "react";
import DisplayAuthor from "./DisplayAuthor";

const DisplayAuthors = (props) => (
    <div>
        <p>Authors Will be Displayed Below - - </p>
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
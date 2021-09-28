import React from "react";
import DisplayQuote from "./DisplayQuote";

const DisplayQuotes = (props) => (
  <div className="grid">
      {
        props.quotes.map((quote) => (
          <DisplayQuote
           key={quote._id}
           content={quote.content}
           author={quote.author}
           tag={quote.tags[0]}
           />
        ))
      }
    </div>
);
 export default DisplayQuotes;
import React from "react";
import DisplayQuote from "./DisplayQuote";

const DisplayQuotes = (props) => (
  <div>
      <p>Quotes Will Be Displayed Below !!</p>
      {
        props.quotes.map((quote) => (
          <DisplayQuote
           key={quote._id}
           content={quote.content}
           author={quote.author}
           />
        ))
      }
    </div>
);
 export default DisplayQuotes;
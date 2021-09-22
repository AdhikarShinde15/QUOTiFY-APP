import React from "react";
import AdvanceFilters from "./AdvanceFilters";
import RandonQuotes from "./RandomQuotes";
import DisplayQuotes from "./DisplayQuotes";
export default class QuotifyApp extends React.Component {
    
    getQuotes = () => {
        let tempQuotes = [];
        fetch('https://api.quotable.io/quotes?page=1')
        .then(response => response.json())
        .then(data => {
         const complete = `${data.content} —${data.author}`;
          for(let i=0;i<6;i++)
          tempQuotes.push({
              content:data.results[i].content,
              author:data.results[i].author
          });
        //  this.setState(() => ({quotes:tempQuotes}))
         return tempQuotes;
       })
       
    }
    state = {
        quotes : this.getQuotes()
    };
    componentDidMount() {
        console.log(this.state.quotes)
    }
    render () {
        return (
            <div>
                <h1>Quotify App</h1>
                 <AdvanceFilters/>
                 <RandonQuotes/>
                 <DisplayQuotes/>
                  {<p>{this.state.quotes}</p>}
            </div>
        );
    }
}

// QuotifyApp.defaultProps = {
   
    
// }
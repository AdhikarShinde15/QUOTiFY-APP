import React from "react";
import AdvanceFilters from "./AdvanceFilters";
import RandonQuotes from "./RandomQuotes";
import DisplayQuotes from "./DisplayQuotes";
import DisplayAuthors from "./DisplayAuthors";

const getQuotes = async (randomPage) => {
  const response = await fetch(`https://api.quotable.io/quotes?page=${randomPage}&limit=6`)
  if(response.status === 200){
    const data = await response.json();
    return data.results
  }else {
    throw new Error('Unable to get Quotes')
  }

}
let showHide = true ;
export default class QuotifyApp extends React.Component { 
   state = {
        quotes : [],
        authors : []
     }
     handleUpdateQuotes = (data) => {
       showHide = true;
        this.setState(() => ({quotes:data}))
     }
     handleUpdateAuthors = (data) => {
       showHide = false;
       this.setState(() => ({authors:data}))
     }
    render () {
      console.log("render ran")
        return (
            <div>
                <h1>Quotify App</h1>
                 <AdvanceFilters handleUpdateQuotes={this.handleUpdateQuotes} />
                 <RandonQuotes
                 handleUpdateQuotes={this.handleUpdateQuotes}
                 handleUpdateAuthors={this.handleUpdateAuthors}
                 />
                { showHide && 
                 <DisplayQuotes 
                 quotes={this.state.quotes}
                 />
                }
                 { !(showHide) &&
                   <DisplayAuthors
                   authors={this.state.authors}
                 /> 
                 }
            </div>
        );
    }   
   componentDidMount () {
     const randomPage = Math.floor(Math.random() * 94);
     getQuotes(randomPage).then((data) => {
       this.setState(() => ({quotes:data}))
       }).catch ((err) => {
       console.log(err)
     })
   }
}

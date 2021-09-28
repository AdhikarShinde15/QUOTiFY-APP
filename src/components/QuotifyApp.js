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

export default class QuotifyApp extends React.Component { 

   state = {
        quotes : [],
        authors : [],
        showHide : false
     }
     handleUpdateQuotes = (data) => {
       const {showHide} = this.state
      if(showHide)
        this.setState(() => ({showHide:!showHide,quotes:data}))
      else
        this.setState(() => ({showHide:showHide,quotes:data}))  
     }
     handleUpdateAuthors = (data) => {
      const {showHide} = this.state
      if(showHide)
      this.setState(() => ({showHide:showHide,authors:data}))
      else
      this.setState(() => ({showHide:!showHide,authors:data}))
     }
    render () {
        return (
            <div>
               <h1 className="header"><i className="fas fa-quote-right"></i>  Quotify App</h1>
               <div className="container">
                 <div className="advance">
                   <AdvanceFilters handleUpdateQuotes={this.handleUpdateQuotes} />
                 </div>
                 <RandonQuotes
                    handleUpdateQuotes={this.handleUpdateQuotes}
                    handleUpdateAuthors={this.handleUpdateAuthors}
                 />
                { !(this.state.showHide) && 
                 <DisplayQuotes 
                 quotes={this.state.quotes}
                 />
                }
                 { (this.state.showHide) &&
                   <DisplayAuthors
                   authors={this.state.authors}
                 /> 
                 }
            </div>
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

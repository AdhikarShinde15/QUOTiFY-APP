import React from "react";
import AdvanceFilters from "./AdvanceFilters";
import RandonQuotes from "./RandomQuotes";
import DisplayQuotes from "./DisplayQuotes";

const getQuotes = async () => {
  const response = await fetch('https://api.quotable.io/quotes?limit=6')
  if(response.status === 200){
    const data = await response.json();
    return data.results
  }else {
    throw new Error('Unable to get Quotes')
  }

}
export default class QuotifyApp extends React.Component {
    state = {
        quotes : []
     }
     handleUpdateQuotes = (data) => {
      //  console.log(data)
        this.setState(() => ({quotes:data}))
     }
    render () {
      // console.log(this.state.quotes.length)
      // this.state.quotes.forEach(element => {
      //   console.log(element.content)
      // });
    
      console.log("render ran")
        return (
            <div>
                <h1>Quotify App</h1>
                 <AdvanceFilters handleUpdateQuotes={this.handleUpdateQuotes} />
                 <RandonQuotes
                 handleUpdateQuotes={this.handleUpdateQuotes}
                 />
                 <DisplayQuotes 
                 quotes={this.state.quotes}
                 />
                  
            </div>
        );
    }
      
    componentDidUpdate() {
      console.log("Update")
    }    
   componentDidMount () {
     getQuotes().then((data) => {
       this.setState(() => ({quotes:data}))
       }).catch ((err) => {
       console.log(err)
     })
   }
}

// QuotifyApp.defaultProps = {
   
    
// }
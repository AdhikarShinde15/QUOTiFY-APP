import React from "react";

const getRandomQuotes = async () => {
    const response = await fetch('https://quotable.io/quotes?page=2')
    if(response.status === 200){
      const data = await response.json();
      return data.results
    }else {
      throw new Error('Unable to get Quotes')
    }
  
}

const getRandomAuthor = async () => {
    const response = await fetch('https://quotable.io/quotes')
    if(response.status === 200){
      const data = await response.json();
       return data.results
    }else {
      throw new Error('Unable to get Quotes')
    }
  
}

export default class RandonQuotes extends React.Component {
    randomQuotes = () => (
        getRandomQuotes().then((data) => {
            this.props. handleUpdateQuotes(data);
            }).catch ((err) => {
            console.log(err)
          })
    );
    randomAuthors = () => (
        getRandomAuthor().then((data) => {
            this.props. handleUpdateQuotes(data);
            }).catch ((err) => {
            console.log(err)
          })
    );
    render () {
        return (
            <div>
                <span>
                    <button onClick={this.randomQuotes}>Generate Random Quotes</button>
                    <button onClick={this.randomAuthors}>Generate Random Authors</button>
                </span>
            </div>
        );
    }
}
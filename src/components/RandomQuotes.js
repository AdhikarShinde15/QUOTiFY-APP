import React from "react";

const getRandomQuotes = async (randomPage) => {
    const response = await fetch(`https://quotable.io/quotes?page=${randomPage}&limit=6`)
    if(response.status === 200){
      const data = await response.json();
      return data.results
    }else {
      throw new Error('Unable to get Quotes')
    }
  
}

const getRandomAuthor = async (randomPage) => {
    const response = await fetch(`https://quotable.io/authors?page=${randomPage}&limit=6`)
    if(response.status === 200){
      const data = await response.json();
       return data.results
    }else {
      throw new Error('Unable to get Authors')
    }
  
}

export default class RandonQuotes extends React.Component {
   randomQuotes = () => {
    const randomPage = Math.floor(Math.random() * 94);
      getRandomQuotes(randomPage).then((data) => {
          this.props. handleUpdateQuotes(data);
          }).catch ((err) => {
          console.log(err)
        })
  
   }
    randomAuthors = () => {
      const randomPage = Math.floor(Math.random() * 35);
      getRandomAuthor(randomPage).then((data) => {
          this.props. handleUpdateAuthors(data);
          }).catch ((err) => {
          console.log(err)
        })
    }
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
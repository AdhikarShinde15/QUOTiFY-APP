import React from "react";

const fetchByAuthor = async (author) => {
    const response = await fetch(`https://quotable.io/quotes?author=${author}`)
    if(response.status === 200){
      const data = await response.json();
       return data.results
    }else {
      throw new Error('Unable to get Quotes')
    }
  
}

const fetchByTags = async (tagsList) => {
    const response = await fetch(`https://quotable.io/quotes?tags=${tagsList}`)
    if(response.status === 200){
      const data = await response.json();
       return data.results
    }else {
      throw new Error('Unable to get Quotes')
    }
  
}

export default class AdvanceFilters extends React.Component {
    state = {
        filterby : undefined
    };
    filterByAuthor = (e) => {
        e.preventDefault();
        const author = (e.target.elements.author.value).trim();
        const limit = parseInt(((e.target.elements.limit.value).trim()),10);

        fetchByAuthor(author).then((data) => {
           const dataLenght = Object.keys(data).length;
           if(limit <= dataLenght)
            this.props. handleUpdateQuotes(data.slice(0,limit));
           else{
            this.props. handleUpdateQuotes(data);
           } 
            }).catch ((err) => {
            console.log(err)
          })
        e.target.elements.limit.value='';
        e.target.elements.author.value='';
    }
    filterByTags = (e) => {
        e.preventDefault();
        let  arr = [];
        const limit = parseInt(((e.target.elements.limit.value).trim()),10);
        if((e.target.elements.wisdom).checked)
        arr.push(e.target.elements.wisdom.value);
        if((e.target.elements.technology).checked)
        arr.push(e.target.elements.technology.value);
        if((e.target.elements.inspirational).checked)
        arr.push(e.target.elements.inspirational.value);
        if((e.target.elements.famousquotes).checked)
        arr.push(e.target.elements.famousquotes.value);
        if((e.target.elements.friendship).checked)
        arr.push(e.target.elements.friendship.value);
        const tagsList = (arr.join(","));
        console.log("joins heere",tagsList)
        fetchByTags(tagsList).then((data) => {
            const dataLenght = Object.keys(data).length;
            if(limit <= dataLenght)
             this.props. handleUpdateQuotes(data.slice(0,limit));
            else{
             this.props. handleUpdateQuotes(data);
            } 
             }).catch ((err) => {
             console.log(err)
           })
    }
    selectFilter = (e) => {
        e.preventDefault()
        const {name,value} = e.target;
        if(value === 'author')
        this.setState(() => ({filterby:true}));
        if(value === 'quotes')
        this.setState(() => ({filterby:false}));  
    }
    render () {
        const {filterby} = this.state
        return (
            <div>
                <h3>Advance Filters</h3>
                    <select onChange={this.selectFilter}>
                      <option value={undefined}>Select Filter</option>  
                      <option value="author">Author</option>
                      <option value="quotes">Quotes</option>
                    </select>
                     {
                      (filterby === true) && (
                            <div>
                              <form onSubmit={this.filterByAuthor}>
                               <input name="limit" type="text" placeholder="Limit"/>
                               <input name="author" type="text" placeholder="Name"/>
                               <button>Submit</button>
                              </form>
                            </div>
                      )
                     }
                    {
                     (filterby === false) && (
                          <div>
                              <form onSubmit={this.filterByTags}>
                               <input name="limit" type="text" placeholder="Limit"/>
                               <input name="wisdom" type="checkbox" value="wisdom"/><label>Wisdom</label>
                               <input name="technology" type="checkbox" value="technology"/><label>Technology</label>
                               <input name="inspirational" type="checkbox" value="inspirational"/><label>Inspirational</label>
                               <input name="famousquotes" type="checkbox" value="famous-quotes"/><label>Famous-Quotes</label>
                               <input name="friendship" type="checkbox" value="friendship"/><label>Friendship </label>
                               <button>Submit</button>
                              </form>
                         </div>
                        )
                     }
            </div>
        );
    }
}


   
import React from "react";

const fetchByAuthor = async (author,limit = 6) => {
    const response = await fetch(`https://quotable.io/quotes?author=${author}&limit=${limit}`)
    if(response.status === 200){
      const data = await response.json();
       return data.results
    }else {
      throw new Error('Unable to get Quotes')
    }
  
}

const fetchByTags = async (tagsList,limit) => {
    const response = await fetch(`https://quotable.io/quotes?tags=${tagsList}&limit=${limit}`)
    if(response.status === 200){
      const data = await response.json();
       return data.results
    }else {
      throw new Error('Unable to get Quotes')
    }
  
}

export default class AdvanceFilters extends React.Component {
    state = {
        filterby : true,
        error : undefined
    };
    filterByAuthor = (e) => {
       try{
        e.preventDefault();
        const author = (e.target.elements.author.value).trim();
        const limit = parseInt(((e.target.elements.limit.value).trim()),10);
        if(author === "" || isNaN(limit))
        throw "Enter Valid Values"
        fetchByAuthor(author,limit).then((data) => { 
            this.props. handleUpdateQuotes(data);
            this.setState(()=> ({error:undefined}))
            }).catch ((err) => {
            console.log(err)
          })
        e.target.elements.limit.value='';
        e.target.elements.author.value='';
       }catch(err) {
        this.setState(()=> ({error:err}))
       }
    }
    filterByTags = (e) => {
       try {
        e.preventDefault();
        let  arr = [];
        let check = 0;
        const limit = parseInt(((e.target.elements.limit.value).trim()),10);
        if((e.target.elements.wisdom).checked){
          check=1;
          arr.push("wisdom");
        }
        if((e.target.elements.technology).checked){
          check=1;
          arr.push("technology");
        }
        if((e.target.elements.inspirational).checked){
          check=1;
          arr.push("inspirational");
        }
        if((e.target.elements.famousquotes).checked){
          check=1;
          arr.push("famous-quotes");
        }
        if((e.target.elements.friendship).checked){
          check=1;
          arr.push("friendship");
        }
        const tagsList = (arr.join(","));
        if((limit === "" || check === 0))
        throw "Enter valid Values";
        fetchByTags(tagsList,limit).then((data) => {
         this.props. handleUpdateQuotes(data);
         this.setState(()=> ({error:undefined}))
             }).catch ((err) => {
             
           })
       }catch(err){
          this.setState(()=> ({error:err}))
       }
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
                      <option value="author">Author</option>
                      <option value="quotes">Quotes</option>
                    </select>
                     {
                      (filterby === true) && (
                            <div>
                              <form onSubmit={this.filterByAuthor}>
                                {this.state.error && <p>{this.state.error}</p>}
                               <input name="limit" type="number" placeholder="Limit"/>
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
                               {this.state.error && <p>{this.state.error}</p>}
                               <input name="limit" type="number" placeholder="Limit"/>
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


   
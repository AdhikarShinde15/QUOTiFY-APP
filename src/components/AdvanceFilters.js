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
               {this.state.error && <p>{this.state.error}</p>}
                    <select className="select-items" onChange={this.selectFilter}>  
                      <option value="author">Author</option>
                      <option value="quotes">Quotes</option>
                    </select>
                     {
                      (filterby === true) && (
                              <div className="author-main">
                                <form id="author-id" className="author-form" onSubmit={this.filterByAuthor}>
                                 <input className="author-input-box1" name="limit" type="number" placeholder="Limit"/>
                                 <input className="author-input-box2" name="author" type="text" placeholder="Name"/>
                               </form>
                              <button className="all-btn" form="author-id">Submit</button>
                              </div>
                      )
                     }
                    {
                     (filterby === false) && (
                             <div>
                              <input form="quotes-id"  className="input-limit-quotes" name="limit" type="number" placeholder="Limit"/>
                                <div className="quotes-main">
                                <form id="quotes-id" className="quotes-form" onSubmit={this.filterByTags}>
                                 <label><input name="wisdom" type="checkbox" value="wisdom"/> Wisdom</label>
                                 <label><input name="technology" type="checkbox" value="technology"/> Technology</label>
                                 <label><input name="inspirational" type="checkbox" value="inspirational"/> Inspirational</label>
                                 <label> <input name="famousquotes" type="checkbox" value="famous-quotes"/> Famous-Quotes</label>
                                 <label><input name="friendship" type="checkbox" value="friendship"/> Friendship </label> 
                               </form>
                               <button className="all-btn" form="quotes-id">Submit</button>
                              </div>
                             </div>
                        )
                     }
            </div>
        );
    }
}


   
import React from "react";

export default class AdvanceFilters extends React.Component {
    
    state = {
        filterby : undefined
    };
    selectFilter = (e) => {
        e.preventDefault()
        const {name,value} = e.target;
        if(value === 'author')
        this.setState(() => ({filterby:true}));
        if(value === 'quotes')
        this.setState(() => ({filterby:false}));
        
    }
    render () {
        return (
            <div>
                
                <form>
                    <h3>Advance Filters</h3>
                    <select onChange={this.selectFilter} name="op">
                      <option value={undefined}>Select Filter</option>  
                      <option value="author">Author</option>
                      <option value="quotes">Quotes</option>
                    </select>
                     {
                      (this.state.filterby === true) && (
                          <div>
                            <input type="text" placeholder="Limit"/>
                            <input type="text" placeholder="Name"/>
                            <button>Submit</button>
                          </div>
                      )
                     }
                    {
                     (this.state.filterby === false) && (
                          <div>
                              <input type="text" placeholder="Limit"/>
                              <input type="checkbox"/><label>Wisdom</label>
                              <input type="checkbox"/><label>Technology</label>
                              <input type="checkbox"/><label>Inspirational</label>
                              <input type="checkbox"/><label>Famous-quotes</label>
                              <input type="checkbox"/><label>Friendship </label>
                              <button>Submit</button>
                         </div>
                        )
                     }
                </form>
                
            </div>
        );
    }
}

// {
//     fetch('https://api.quotable.io/random')
//     .then(response => response.json())
//     .then(data => {
//       console.log(`${data.content} —${data.author}`)
//     })
// }


   
import React from 'react';



class Search extends React.Component {
    constructor(props) {
        super(props)
          this.state = {
            count: 0
          }
    }
    
  
    render() {
      return(
        
        <input type="text" name="search" className="address-search" placeholder="Address"></input>
    
      )
    }
};

export default Search;
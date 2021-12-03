import React, { useState } from 'react'

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState({
    "search-term": ""
  });

  const handleChange = (event) => {
    event.preventDefault();

    setSearchTerm({
      ...searchTerm,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(searchTerm["search-term"])
    e.target.reset();
  }
  
  return(
    <div className="grid-x grid-margin-x grid-padding-x align-center-middle">
      <div className="search-container cell small-3">
        <input 
              type="search" 
              id="search-term" 
              name="search-term" 
              placeholder="Enter an ingredient..."
              onChange={handleChange}
        />
        <button className="search-button" onClick={handleSubmit}>Find Recipe</button>
      </div>
    </div>    
  )
}

export default SearchBar
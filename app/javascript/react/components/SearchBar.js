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
  }

  return(
    <div className="grid-x grid-margin-x grid-padding-x align-center-middle">
      <div className="search-container cell small-6">
        <form className="input-group input-group-rounded">
          <input 
                className="input-group-field"
                type="search" 
                id="search-term" 
                name="search-term" 
                placeholder="Enter an ingredient..."
                onChange={handleChange}
          />
          <div className="input-group-button">
          <input type="submit" className="button search-submit" onClick={handleSubmit} value="Search"/>
          </div>
        </form>
      </div>
    </div>    
  )
}

export default SearchBar
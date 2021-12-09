import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Image from "../../../assets/images/project-nom-logo.png"
import { Redirect } from "react-router-dom"

const HomeIndexPage = () => {
  const [searchResult, setSearchResult] = useState()
  const [redirect, setRedirect] = useState(false)

  const onSearchSubmit = async (searchTerm) => {
    const API_KEY = process.env.SPOONACULAR_KEY

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${API_KEY}&number=12&addRecipeInformation=true&instructionsRequired=true&includeIngredients`)
      if (!response.ok) {
        throw(new Error(`${response.status}: ${response.statusText}`))
      }
      const searchData = await response.json()

      setSearchResult(searchData.results)
      setRedirect(true)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  if (redirect) {
    return <Redirect 
              to={{
                pathname: '/results',
                state: {
                  searchResult
                }
              }}
            />
  }
  
  return(
  <div>
    <div className="parallax-background">
      <div className="para-search-bar">
        <div className="nom-logo">    
          <img src={Image}/>
        </div>
        <SearchBar onSubmit={onSearchSubmit}/>
      </div>
    </div>
  </div>
  )
}

export default HomeIndexPage
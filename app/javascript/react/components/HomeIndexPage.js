import React, { useState } from 'react'
import SearchBar from './SearchBar'
import RecipeResultTile from './RecipeResultTile'

const HomeIndexPage = () => {
  const [searchResult, setSearchResult] = useState()

  const onSearchSubmit = async (searchTerm) => {
    const API_KEY = process.env.SPOONACULAR_KEY

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${API_KEY}&number=12&addRecipeInformation=true&instructionsRequired=true&includeIngredients`)
      if (!response.ok) {
        throw(new Error(`${response.status}: ${response.statusText}`))
      }
      const searchData = await response.json()
      console.log(searchData.results)
      setSearchResult(searchData.results)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  let recipeList;
  if (searchResult) {
    recipeList = searchResult.map ((recipe) => {
      return(
        <RecipeResultTile 
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          cookTime={recipe.readyInMinutes}  
          servings={recipe.servings}
          sourceName={recipe.sourceName}
        />
      )
    })
  }

  return(
  <div>
    <div className="parallax-background">
      <div className="intro-text">
        <SearchBar onSubmit={onSearchSubmit}/>
      </div>
    </div>
      
      <div id="search-content" className="parallax-content">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {recipeList}
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeIndexPage
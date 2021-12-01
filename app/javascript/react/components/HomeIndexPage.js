import React, { useState } from 'react'
import SearchBar from './SearchBar'

const HomeIndexPage = () => {
  const [searchResult, setSearchResult] = useState()

  const onSearchSubmit = async (searchTerm) => {
    console.log(`Hitting the HomeIndexPage ${searchTerm}`)
    const API_KEY = process.env.SPOONACULAR_KEY

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${API_KEY}&number=2&addRecipeInformation=true&instructionsRequired=true&includeIngredients`)
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
        <div className="callout cell small-4">
          <p className="text-center">{recipe.title}</p>
          <img src={recipe.image}/>
          <li>Cook Time: {recipe.readyInMinutes} minutes</li>
          <li>Servings: {recipe.servings}</li>
        </div>
      )
    })
  }
  
  return(
    <div>
        <SearchBar onSubmit={onSearchSubmit}/>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            {recipeList}
          </div>
        </div>
    </div>
  )
}

export default HomeIndexPage
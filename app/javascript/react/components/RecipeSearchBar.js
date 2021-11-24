import React from 'react'

const RecipeSearchBar = () => {

  return(
    <div>
      <label for="recipe-search">Search for a recipe:</label>
        <input type="recipe-search" id="recipe-search" name="recipe-search" placeholder="What are you cooking?" />
        <input type="submit" value="Find Recipe"/>
    </div>
  )
}

export default RecipeSearchBar
import React from "react"
import RecipeResultTile from "./RecipeResultTile"

const ResultsPage = (props) => {
  let searchData = props.location.state.searchResult
  
  let recipeList = searchData.map ((recipe) => {
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

  return(
    <div className="callout" id="search-content">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {recipeList}
        </div>
      </div>
    </div>
  )
}

export default ResultsPage
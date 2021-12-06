import React, { useState, useEffect } from 'react'

const RecipeShowPage = (props) => {
  const [recipe, setRecipe] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])

  const fetchRecipe = async() => {
    const API_KEY = process.env.SPOONACULAR_KEY

    try{
      const response = await fetch(`https://api.spoonacular.com/recipes/${props.match.params.id}/information?apiKey=${API_KEY}`)
      if (!response.ok){
        throw(new Error(`${response.status}: ${response.statusText}`))
      }
      const result = await response.json()
      setRecipe(result)
      setIngredients(result.extendedIngredients)
      setInstructions(result.analyzedInstructions[0].steps)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchRecipe()
  }, [])

  return(
    <div className="grid-container">
      <div className="recipe-heading">
        <h1 className="recipe-heading-title">{recipe.title}</h1>
        <p>By {recipe.sourceName}</p>
      </div>

      <div className="recipe-image-section" align="left">
        <img className="recipe-image" src={recipe.image}/>
        <h6 className="recipe-source">Image Source: <a className="recipe-source-url" href={recipe.sourceUrl}>{recipe.sourceName}</a></h6>
      </div>

      <div className="recipe-info">
        <p>Servings: {recipe.servings} </p>
        <p>Total time: {recipe.readyInMinutes} minutes</p>
      </div>

      <div className="recipe-ingredients">
        <h2>Ingredients</h2>
        <ul className="nobullet">
          {ingredients.map((i) => {
            return(
              <li key={i.id}><input type="checkbox"/> {i.originalString}</li>  
            )
          })}
        </ul>
      </div>

      <div className="recipe-directions">
        <h2>Directions</h2>
        <ol>
          {instructions.map((i) => {
            return(
              <li key={i.number}>{i.step}</li>
            )
          })}
        </ol>
      </div>

    </div>
  )
}

export default RecipeShowPage
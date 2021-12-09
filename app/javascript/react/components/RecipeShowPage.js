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
    <div className="callout">
      <div className="grid-container">
        <div className="grid-x">
          <div className="recipe-heading-container cell small-6" align="left">
            <div className="recipe-heading-wrapper">
              <h1 className="recipe-heading-title">{recipe.title}</h1>
              <p>By {recipe.sourceName}</p>
              <center>
              <div className="recipe-details-container">
                <p className="recipe-detail"><b>Servings:</b> {recipe.servings} </p>
                <p className="recipe-detail"><b>Total time:</b> {recipe.readyInMinutes} minutes</p>
              </div>
              </center>
            </div>
          </div>
          <div className="recipe-image-container cell small-6" align="right">
            <img className="recipe-image" align="right" src={recipe.image}/>
            <h6 className="recipe-source" align="center">Image Source: <a className="recipe-source-url" href={recipe.sourceUrl}>{recipe.sourceName}</a></h6>
          </div>
        </div>
        <hr/>
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
        <hr/>
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

    </div>
  )
}

export default RecipeShowPage
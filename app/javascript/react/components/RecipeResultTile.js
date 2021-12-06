import React from 'react'
import { Link } from 'react-router-dom'

const RecipeResultTile = (props) => {
  return( 
    <Link className="callout cell small-4" to={`/recipes/${props.id}`}>
      <div>
        <img src={props.image}/>
        <p className="text-center">{props.title}</p>
        <p className="text-center">By {props.sourceName}</p>
        <p>Cook Time: {props.cookTime} minutes</p>
        Servings: {props.servings}
      </div> 
    </Link>
  )
}

export default RecipeResultTile
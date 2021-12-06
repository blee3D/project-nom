import React from 'react'
import { Link } from 'react-router-dom'

const RecipeResultTile = (props) => {
  return( 
    <div className="cell small-3">
    <Link to={`/recipes/${props.id}`}>
      <div className="card">
        <img className="card-image" src={props.image}/>
        <div className="card-section">
          <h3 className="recipe-card-title">{props.title}</h3>
          <span className="recipe-card-author">By {props.sourceName}</span>
          <p className="recipe-card-details">Total Time: {props.cookTime} minutes</p>
          <p className="recipe-card-details"> Servings: {props.servings}</p>
        </div>
      </div> 
    </Link>
    </div>
  )
}

export default RecipeResultTile
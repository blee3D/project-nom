import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeIndexPage from "./HomeIndexPage"
import RecipeShowPage from "./RecipeShowPage"
import ResultsPage from './ResultsPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeIndexPage} />
        <Route exact path="/recipes" component={HomeIndexPage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/recipes/:id" component={RecipeShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

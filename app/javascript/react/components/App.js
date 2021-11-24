import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeIndexPage from "./HomeIndexPage"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

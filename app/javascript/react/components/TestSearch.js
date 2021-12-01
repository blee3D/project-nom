import React from 'react'

const TestSearch = () => {

    const fetchData = async (searchTerm) => {
    console.log(`Hitting the HomeIndexPage ${searchTerm}`)
    const API_KEY = process.env.SPOONACULAR_KEY

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchTerm}&number=1&addRecipeInformation=true&instructionsRequired=true`)
      if (!response.ok) {
        throw(new Error(`${response.status}: ${response.statusText}`))
      }
      const searchData = await response.json()
      debugger
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  return(
    console.log(searchData.results)
  )
}

export default TestSearch

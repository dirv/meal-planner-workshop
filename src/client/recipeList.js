import React from "react"
import ReactDOM from "react"

export default class RecipeList extends React.Component {

  constructor(props) {
    super(props)
    this.recipesReceived = this.recipesReceived.bind(this)
    this.props.recipeRepository.then(this.recipesReceived)
    this.state = {
      recipes: []
    }
  }

  recipesReceived(recipes) {
    this.setState({
      recipes: recipes
    })
  }

  render() {
    return <ul>
      {this.state.recipes.map(this.renderRecipe)}
      </ul>
  }

  renderRecipe(recipe) {
    return <li key={recipe}>{recipe}</li>
  }
}


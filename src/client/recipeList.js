import React from 'react'
import ReactDOM from 'react'
import Recipe from './recipe'

export default class RecipeList extends React.Component {

  constructor(props) {
    super(props)
    this.handleChooseRecipe = this.handleChooseRecipe.bind(this)
    this.recipesReceived = this.recipesReceived.bind(this)
    this.renderRecipe = this.renderRecipe.bind(this)
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
    return <div id='main'>
      <ul id='recipeList'>
      {this.state.recipes.map(this.renderRecipe)}
      </ul>
      <Recipe chosenRecipe={this.state.chosenRecipe} />
      </div>
  }

  renderRecipe(recipe) {
    return <li key={recipe}><a onClick={this.handleChooseRecipe}>{recipe}</a></li>
  }

  handleChooseRecipe(e) {
    this.setState({
      chosenRecipe: e.target.textContent
    })
  }
}


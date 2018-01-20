import React from 'react'
import ReactDOM from 'react-dom'
import { loadRecipe } from './recipeRepository'

export default class Recipe extends React.Component {

  constructor(props) {
    super(props)
    this.doLoad = this.doLoad.bind(this)
    this.renderRecipe = this.renderRecipe.bind(this)
    this.doLoad()
    this.state = {}
  }

  componentDidUpdate(oldProps, oldState) {
    if(oldProps.chosenRecipe !== this.props.chosenRecipe) {
      this.doLoad()
    }
  }

  doLoad() {
    if(this.props.chosenRecipe) {
      this.props.recipeLoader(this.props.chosenRecipe).then(recipe => {
        this.setState({
          recipe: recipe
        })
      })
    }
  }

  render() {
    if(this.state.recipe) {
      return this.renderRecipe()
    } else {
      return <div>No recipe selected</div>
    }
  }

  renderRecipe() {
    return <div id='recipe'>
      <h2>{this.props.chosenRecipe}</h2>
      <ul>{this.state.recipe.ingredients.map(this.renderIngredient)}</ul>
      <p>Serves: {this.state.recipe.serves}</p>
      <p>Preparation time: {this.state.recipe.preparationTimeInMins} mins</p>
      <p>{this.state.recipe.instructions}</p>
      </div>
  }

  renderIngredient(ingredient) {
    if(ingredient.measure) {
      return <li key={ingredient.name}>{ingredient.amount} {ingredient.measure} {ingredient.name}</li>
    } else {
      return <li key={ingredient.name}>{ingredient.amount} {ingredient.name}</li>
    }
  }
}

Recipe.defaultProps = {
  recipeLoader: loadRecipe
}

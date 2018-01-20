import React from 'react'
import ReactDOM from 'react-dom'
import { loadRecipe } from './recipeRepository'

export default class Recipe extends React.Component {

  constructor(props) {
    super(props)
    this.doLoad = this.doLoad.bind(this)
    this.doLoad()
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
    if(this.props.chosenRecipe) {
      return <div>Displaying recipe {this.props.chosenRecipe}</div>
    } else {
      return <div>No recipe selected</div>
    }
  }
}

Recipe.defaultProps = {
  recipeLoader: loadRecipe
}

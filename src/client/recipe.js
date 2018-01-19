import React from 'react'
import ReactDOM from 'react-dom'

export default class Recipe extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.chosenRecipe) {
      return <div>Displaying recipe {this.props.chosenRecipe}</div>
    } else {
      return <div>No recipe selected</div>
    }
  }
}

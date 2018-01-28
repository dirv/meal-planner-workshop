import React from 'react'
import ReactDOM from 'react-dom'

export default class EditRecipe extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <form>
      <input name="name" value={this.props.recipe.name} readOnly={true} />
      </form>
  }
}

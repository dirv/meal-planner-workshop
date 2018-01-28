import React from 'react'
import ReactDOM from 'react-dom'

export default class EditRecipe extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <form>
      <label htmlFor='name'>Name</label>
      <input id='name' value={this.props.recipe.name} readOnly={true} />
      <label htmlFor='serves'>Serves</label>
      <input id='serves' type='number' value={this.props.recipe.serves} readOnly={true} />
      </form>
  }
}

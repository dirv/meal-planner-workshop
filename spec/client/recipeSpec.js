import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import Recipe from '~/recipe'

describe('Recipe', () => {
  let component

  it('displays no selection message if nothing is selected', () => {
    mountComponent(undefined)
    expect(textContent()).toEqual('No recipe selected')
  })

  it('displays a message if a recipe is selected', () => {
    mountComponent('Avocado bagel')
    expect(textContent()).toEqual('Displaying recipe Avocado bagel')
  })

  function textContent() {
    return ReactTestUtils
      .findRenderedDOMComponentWithTag(component, 'div')
      .textContent
  }

  function mountComponent(chosenRecipe) {
    const container = document.createElement('div')
    component = ReactDOM.render(
      <Recipe chosenRecipe={chosenRecipe} />,
      container)
  }
})

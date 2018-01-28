import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import EditRecipe from '~/editRecipe'
import { recipe } from '../sampleData/recipe'

describe('EditRecipe', () => {
  let container
  let component

  beforeEach(() => {
    container = document.createElement('div')
  })

  it('displays recipe name in a text field', () => {
    mountComponent()
    const recipeName = inputFieldWithName('name')
    expect(recipeName.type).toEqual('text')
    expect(recipeName.value).toEqual(recipe.name)
  })

  function mountComponent() {
    component = ReactDOM.render(
      <EditRecipe recipe={recipe} />,
      container)
  }

  function inputFieldWithName(name) {
    return form().querySelector(`input[name=${name}]`)
  }

  function form() {
    return ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form')
  }
})

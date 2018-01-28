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
    const field = inputFieldWithId('name')
    expect(field).not.toBeNull()
    expect(field.type).toEqual('text')
    expect(field.value).toEqual(recipe.name)
  })

  it('displays a recipe label for the text field', () => {
    mountComponent()
    const label = labelForField('name')
    expect(label).not.toBeNull()
    expect(label.textContent).toEqual('Name')
  })

  it('displays servings in a number field', () => {
    mountComponent()
    const field = inputFieldWithId('serves')
    expect(field).not.toBeNull()
    expect(field.type).toEqual('number')
    expect(field.value).toEqual(recipe.serves.toString())
  })

  it('displays a servings label for the text field', () => {
    mountComponent()
    const label = labelForField('serves')
    expect(label).not.toBeNull()
    expect(label.textContent).toEqual('Serves')
  })

  function mountComponent() {
    component = ReactDOM.render(
      <EditRecipe recipe={recipe} />,
      container)
  }

  function inputFieldWithId(id) {
    return form().querySelector(`input[id=${id}]`)
  }

  function labelForField(id) {
    return form().querySelector(`label[for=${id}]`)
  }

  function form() {
    return ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form')
  }
})

import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import { resetDom } from '../specHelper'
import RecipeList from '~/recipeList'

const recipes = ['recipe 1', 'recipe 2']

describe('recipeList', () => {

  let component
  const repository = Promise.resolve(recipes)

  beforeEach(() => {
    resetDom()
  })

  it('initially displays an empty unordered list', () => {
    mountComponent(repository)
    expect(ul()).toBeDefined()
    expect(ul().children.length).toEqual(0)
  })

  it('renders all recipes once they are received', (done) => {
    mountComponent(repository)
    setImmediate(() => {
      expect(ul().children.length).toEqual(2)
      expect(ul().children[0].textContent).toEqual('recipe 1')
      expect(ul().children[1].textContent).toEqual('recipe 2')
      done()
    })
  })

  function ul() {
    return ReactTestUtils.findRenderedDOMComponentWithTag(component, 'ul')
  }

  function mountComponent(repository) {
    const container = document.createElement('div')
    component = ReactDOM.render(
      <RecipeList recipeRepository={repository} />,
      container)
  }
})

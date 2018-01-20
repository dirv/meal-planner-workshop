import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import { resetDom } from '../specHelper'
import { loadRecipe } from '~/recipeRepository'
import RecipeList from '~/recipeList'
import Recipe from '~/recipe'

const recipes = ['recipe 1', 'recipe 2']

describe('recipeList', () => {

  let component
  const repository = Promise.resolve(recipes)

  beforeEach(() => {
    resetDom()
    spyOn(Recipe.prototype, 'componentDidUpdate')
  })

  it('initially displays an empty unordered list', () => {
    mountComponent()
    expect(ul()).toBeDefined()
    expect(ul().children.length).toEqual(0)
  })

  it('initially has no chosen recipe', () => {
    mountComponent()
    expect(recipe().props.chosenRecipe).not.toBeDefined()
  })

  it('renders all recipes once they are received', (done) => {
    mountComponent()
    setImmediate(() => {
      expect(ul().children.length).toEqual(2)
      expect(ul().children[0].textContent).toEqual('recipe 1')
      expect(ul().children[1].textContent).toEqual('recipe 2')
      done()
    })
  })

  it('renders recipes as links', (done) => {
    mountComponent()
    setImmediate(() => {
      expect(ul().querySelectorAll('li > a').length).toEqual(2)
      done()
    })
  })

  it('clicking link sets the displayed recipe correctly', (done) => {
    mountComponent()
    setImmediate(() => {
      click(firstLink())
      setImmediate(() => {
        expect(recipe().props.chosenRecipe).toEqual('recipe 1')
        done()
      })
    })
  })

  function ul() {
    return ReactTestUtils.findRenderedDOMComponentWithTag(component, 'ul')
  }

  function recipe() {
    return ReactTestUtils.findRenderedComponentWithType(component, Recipe)
  }

  function firstLink() {
    return ul().querySelectorAll('li > a')[0]
  }

  function mountComponent() {
    const container = document.createElement('div')
    component = ReactDOM.render(
      <RecipeList recipeRepository={repository} />,
      container)
  }

  function click(link) {
    return ReactTestUtils.Simulate.click(link)
  }
})

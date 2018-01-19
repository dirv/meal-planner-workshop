import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import Recipe from '~/recipe'

describe('Recipe', () => {
  let component
  const container = document.createElement('div')
  const recipe = { name: 'Avocado bagel' }

  const recipeLoader = jasmine.createSpy().and.returnValue(Promise.resolve(recipe))

  it('displays no selection message if nothing is selected', () => {
    mountComponent(undefined)
    expect(textContent()).toEqual('No recipe selected')
  })

  it('displays a message if a recipe is selected', () => {
    mountComponent('Avocado bagel')
    expect(textContent()).toEqual('Displaying recipe Avocado bagel')
  })

  it('does not load a recipe if no recipe is given', (done) => {
    mountComponent(undefined)
    setImmediate(() => {
      expect(recipeLoader).not.toHaveBeenCalled()
      done()
    })
  })

  it('loads the given recipe using the recipe loader', (done) => {
    mountComponent('Avocado bagel')
    setImmediate(() => {
      expect(recipeLoader).toHaveBeenCalledWith('Avocado bagel')
      done()
    })
  })

  fit('loads when the component is update with new props', (done) => {
    mountComponent(undefined)
    mountComponent('Avocado bagel')
    setImmediate(() => {
      expect(recipeLoader).toHaveBeenCalled()
      done()
    })
  })

  function textContent() {
    return ReactTestUtils
      .findRenderedDOMComponentWithTag(component, 'div')
      .textContent
  }

  function mountComponent(chosenRecipe) {
    component = ReactDOM.render(
      <Recipe chosenRecipe={chosenRecipe}
        recipeLoader={recipeLoader} />,
      container)
  }
})

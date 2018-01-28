import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import Recipe from '~/recipe'
import { recipe } from '../sampleData/recipe'

describe('Recipe', () => {
  let component
  let container
  let recipeLoader

  beforeEach(() => {
    container = document.createElement('div')
    recipeLoader = jasmine.createSpy().and.returnValue(Promise.resolve(recipe))
  })

  it('displays no selection message if nothing is selected', () => {
    mountComponent(undefined)
    expect(textContent()).toEqual('No recipe selected')
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

  it('loads when the component is update with new props', (done) => {
    mountComponent(undefined)
    mountComponent('Avocado bagel')
    setImmediate(() => {
      expect(recipeLoader).toHaveBeenCalled()
      done()
    })
  })

  describe('recipe rendering', () => {
    beforeEach(() => {
      mountComponent('Avocado bagel')
    })

    it('displays the name of the recipe in a heading', (done) => {
      setImmediate(() => {
        expect(h2().textContent).toEqual('Avocado bagel')
        done()
      })
    })

    it('displays whole ingredients', (done) => {
      setImmediate(() => {
        expect(textContent()).toContain('1 avocado')
        expect(textContent()).toContain('1 sesame bagel')
        done()
      })
    })

    it('displays ingredient with one measure', (done) => {
      setImmediate(() => {
        expect(textContent()).toContain('1 tablespoon butter')
        done()
      })
    })

    it('displays ingredients with multiple units', (done) => {
      setImmediate(() => {
        expect(textContent()).toContain('2 tablespoon chilli oil')
        done()
      })
    })

    it('displays serving', (done) => {
      setImmediate(() => {
        expect(textContent()).toContain('Serves: 1')
        done()
      })
    })

    it('displays preparation time', (done) => {
      setImmediate(() => {
        expect(textContent()).toContain('Preparation time: 10 mins')
        done()
      })
    })

    it('display instructions', (done) => {
      setImmediate(() => {
        expect(textContent()).toContain('instructions')
        done()
      })
    })
  })

  function h2() {
    return ReactTestUtils
      .findRenderedDOMComponentWithTag(component, 'h2')
  }

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

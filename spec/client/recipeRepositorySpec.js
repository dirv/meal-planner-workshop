import React from 'react'
import { resetDom } from '../specHelper'
import { loadAllRecipes } from '~/recipeRepository'

describe('recipeRepository', () => {
  const recipes = ['recipe 1', 'recipe 2']

  beforeEach(() => {
    resetDom()
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({json: () => recipes}))
  })

  it('fetches from the /recipes endpoint', () => {
    loadAllRecipes()
    expect(window.fetch).toHaveBeenCalledWith('/recipes')
  })

  it('returns the recipes', (done) => {
    loadAllRecipes().then(result => {
      expect(result).toEqual(recipes)
      done()
    })
  })
})

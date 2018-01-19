import React from 'react'
import { resetDom } from '../specHelper'
import { loadAllRecipes, loadRecipe } from '~/recipeRepository'

describe('loadAllRecipes', () => {
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

describe('loadRecipe', () => {
  const recipe = { name: 'recipeName' }

  beforeEach(() => {
    resetDom()
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({json: () => recipe}))
  })

  it('fetches from the /recipe endpoint', () => {
    loadRecipe('recipeName')
    expect(window.fetch).toHaveBeenCalledWith('/recipes/recipeName')
  })

  it('returns the recipe', (done) => {
    loadRecipe('recipeName').then(result => {
      expect(result).toEqual(recipe)
      done()
    })
  })
})

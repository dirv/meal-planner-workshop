import './styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import RecipeList from './recipeList'
import { loadAllRecipes } from './recipeRepository'

const recipeRepository = loadAllRecipes()

ReactDOM.render(
	<RecipeList recipeRepository={recipeRepository} />,
	document.getElementById('main'))

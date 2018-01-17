export const recipes = [{
  name: 'Toast',
  ingredients: [{
    name: 'white bread',
    amount: 2,
    unit: 'slice'
  }],
  instructions: 'Here are the instructions for the recipe.',
  serves: 1,
  prepartionTimeInMins: 3
}]

export function addRecipe(recipe) {
  recipes.push(recipe)
}

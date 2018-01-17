const recipes = [{
  name: 'Toast',
  ingredients: [{
    name: 'white bread',
    amount: 2,
    unit: 'slice'
  }],
  instructions: 'Here are the instructions for the recipe.',
  serves: 1,
  preparationTimeInMins: 3
}]

export function addRecipe(recipe) {
  recipes.push(recipe)
}

export function findRecipeByName(name) {
  return recipes.find(r => r.name === name)
}

export function replaceRecipe(existing, newRecipe) {
  const index = recipes.indexOf(existing)
  recipes[index] = newRecipe
}

export function getAllRecipeNames() {
  return recipes.map(r => r.name)
}

export const recipeSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    instructions: { type: 'string' },
    serves: { type: 'number' },
    preparationTimeInMins: { type: 'number' },
    ingredients: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          amount: { type: 'number' },
          unit: { type: 'string' }
        },
        required: ['name', 'amount', 'unit']
      }
    },
  },
  required: ['name', 'instructions', 'serves', 'preparationTimeInMins', 'ingredients']
}

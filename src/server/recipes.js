export const recipes = [{
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

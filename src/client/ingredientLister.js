export function formatIngredientRequirement(ingredientFinder, measureFinder, ingredient) {
  if(ingredient.measure) {
    return formatIngredientWithMeasure(measureFinder, ingredient)
  } else {
    return formatWholeIngredient(ingredientFinder, ingredient)
  }
}

function formatIngredientWithMeasure(measureFinder, ingredient) {
  const measure = measureFinder(ingredient.measure)
  if(ingredient.amount === 1) {
    return `1 ${measure.singular} ${ingredient.name}`
  } else {
    return `${ingredient.amount} ${measure.plural} ${ingredient.name}`
  }
}

function formatWholeIngredient(ingredientFinder, ingredient) {
  if(ingredient.amount === 1) {
    return `1 ${ingredient.name}`
  } else {
    const ingredientDetail = ingredientFinder(ingredient.name)
    return `${ingredient.amount} ${ingredientDetail.plural}`
  }
}


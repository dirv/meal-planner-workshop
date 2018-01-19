export function loadAllRecipes() {
  return window.fetch('/recipes').then(r => r.json())
}

export function loadRecipe(name) {
  return window.fetch(`/recipes/${name}`).then(r => r.json())
}

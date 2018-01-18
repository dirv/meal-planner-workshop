export function loadAllRecipes() {
  return window.fetch('/recipes').then(r => r.json())
}

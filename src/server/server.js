var express = require('express')
var app = express()
import { ingredients } from './ingredients'
import { recipes, addRecipe } from './recipes'

app.get('/', function (req, res) {
  res.send(ingredients);
})

app.get('/recipes', function(req, res) {
  res.send(recipes.map(r => r.name))
})

app.post('/recipes', express.json(), function(req, res) {
  addRecipe(req.body)
  res.sendStatus(200)
})

app.get('/recipes/:name', function(req, res) {
  const recipe = recipes.find(r => r.name === req.params.name)
  if (recipe) {
    res.send(recipe)
  } else {
    res.sendStatus(404)
  }
})

app.set('json spaces', 2);
app.use(express.json())
 
app.listen(3000)

const express = require('express')
const app = express()
import { Validator, ValidationError } from 'express-json-validator-middleware'
import { ingredients } from './ingredients'
import { recipes, addRecipe, recipeSchema } from './recipes'

var validator = new Validator({allErrors: true})

app.get('/', function (req, res) {
  res.send(ingredients);
})

app.get('/recipes', function(req, res) {
  res.send(recipes.map(r => r.name))
})

app.post('/recipes', [
  express.json(),
  validator.validate({body: recipeSchema})
], function(req, res) {
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

app.use(function(err, req, res, next) {
  let responseData;

  if (err.name === 'JsonSchemaValidationError') {
    res.status(400)
    res.send(err.validationErrors)
  } else {
    next(err);
  }
});

app.listen(3000)

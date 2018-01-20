const express = require('express')
const app = express()
import { Validator, ValidationError } from 'express-json-validator-middleware'
import { ingredients } from './ingredients'
import { measures } from './measures'
import { getAllRecipeNames, addRecipe, findRecipeByName, replaceRecipe, recipeSchema,  } from './recipes'

var validator = new Validator({allErrors: true})

app.get('/ingredients', function (req, res) {
  res.send(ingredients);
})

app.get('/measures', function (req, res) {
  res.send(measures);
})

app.get('/recipes', function(req, res) {
  res.send(getAllRecipeNames())
})

app.post('/recipes', [
  express.json(),
  validator.validate({body: recipeSchema})
], function(req, res) {
  if (findRecipeByName(req.body.name)) {
    res.sendStatus(409)
  } else {
    addRecipe(req.body)
    res.sendStatus(200)
  }
})

app.put('/recipes/:name', [
  express.json(),
  validator.validate({body: recipeSchema})
], function(req, res) {
  const recipe = findRecipeByName(req.params.name)
  if (recipe) {
    replaceRecipe(recipe, req.body)
    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }
})

app.get('/recipes/:name', function(req, res) {
  const recipe = findRecipeByName(req.params.name)
  if (recipe) {
    res.send(recipe)
  } else {
    res.sendStatus(404)
  }
})

app.get('/', function (req, res) {
  res.render('index', {})
})

app.set('json spaces', 2);
app.use(express.json())
app.use(express.static('./dist/public'))
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug')

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

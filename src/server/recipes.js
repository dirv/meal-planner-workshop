const recipes = [{
  name: 'Toast',
  ingredients: [{
    name: 'sliced bread',
    amount: 2,
    measure: 'slice'
  },{
    name: 'butter',
    amount: 1,
    measure: 'tablespoon'
  }],
  instructions: 'Cook bread in toaster, then spread butter. Serve warm.',
  serves: 1,
  preparationTimeInMins: 3
},{
  name: 'Carrot Soup',
  ingredients:[
    {name: 'haricot beans', amount: 1, measure: 'pint'},
    {name: 'water', amount: 5, measure: 'pint'},
    {name: 'butter', amount: 2, measure: 'ounce'},
    {name: 'salt', amount: 1, measure: 'ounce'},
    {name: 'large carrot', amount: 6},
    {name: 'large onion', amount: 2},
    {name: 'head of celery', amount: 1},
    {name: 'peppercorns', amount: 1, measure: 'teaspoon'}],
  instructions:'Dissolve the butter in a large saucepan. Slice the vegetables, and place them in the saucepan together with the water and peppercorns, and simmer for one hour. Add salt, and simmer for another hour and a half. Strain.',
  serves:4,
  preparationTimeInMins:100,
},{
  name: 'Lentil Soup',
  ingredients:[
    {name: 'lentils', amount: 1, measure: 'pint'},
    {name: 'water', amount: 2, measure: 'quart'},
    {name: 'butter', amount: 1.5, measure: 'ounce'},
    {name: 'carrot', amount: 1},
    {name: 'onion', amount: 1},
    {name: 'turnip', amount: 1},
    {name: 'potato', amount: 1},
    {name: 'salt', amount: 1, measure: 'teaspoon'},
    {name: 'minced parsley', amount: 1, measure: 'tablespoon'}],
  instructions:'Slice the vegetables and fry in the butter for five minutes, place them in a saucepan with the lentils and water and boil one and a half hours; add salt and a little pepper if liked. Strain, replace in the saucepan, add the parsley, boil for three minutes, and serve.\n\n _Note_&embash;The solid part which is strained away should on no account be wasted, but will be found excellent for making lentil puddings, pies, stews, etc.',
  serves:4,
  preparationTimeInMins:100,
},{
  name: 'Potato Casserole',
  ingredients:[
    {name: 'mashed potato', amount: 1, measure: 'pound'},
    {name: 'soaked lentils', amount: 2, measure: 'tablespoon'},
    {name: 'butter', amount: 1, measure: 'ounce'},
    {name: 'flour', amount: 0.5, measure: 'ounce'},
    {name: 'water', amount: 0.5, measure: 'pint'},
    {name: 'shalot', amount: 1},
    {name: 'egg', amount: 1},
    {name: 'hard-boiled egg', amount: 1},
    {name: 'lemon peel', amount: 1, measure: 'strip'},
    {name: 'lump of sugar', amount: 1},
    {name: 'tomato sauce', amount: 2, measure: 'teaspoon'},
    {name: 'salt', amount: 0.5, measure: 'teaspoon'},
    {name: 'pepper to taste'},
  ],
  instructions:'Boil the lentils, water, lemon-peel and half the butter gently for one hour. Remove the lemon-peel and add the sugar, salt and shalot chopped, and boil for fifteen minutes. Make a paste of the flour and the other half ounce of butter, place this in the stew and stir briskly while it boils for five minutes. Then add the tomato sauce and the hard-boiled egg cut into the shape of dice. Have ready the mashed potato prepared as follows:—place it on a small dish and shape into a ring or wall about two and a half inches high and half an inch thick, ornament the outside with a fork, brush over with egg, and brown in the oven. Pour the stew into the hollow centre, and serve quickly.',
  serves:4,
  preparationTimeInMins:85,
},{
  name: 'Vegetable Salad',
  ingredients:[
    {name: 'young carrot', amount: 4},
    {name: 'young potato', amount: 4},
    {name: 'shalot', amount: 1},
    {name: 'salt', amount: 0.5, measure: 'teaspoon'},
    {name: 'tomato', amount: 3},
    {name: 'minced watercress', amount: 1, measure: 'teaspoon'},
    {name: 'water', amount: 0.5, measure: 'pint'},
    {name: 'vinegar', amount: 1, measure: 'tablespoon'}],
  instructions:'Scrape the carrots and potatoes very clean, and stew them gently until tender in the vinegar, salt and water, but on no account must they be allowed to break. When done, take up carefully and place on a board to cool. Scald the tomatoes by plunging them first into boiling water and then into cold; remove the skins and seeds and cut into small slices. When the vegetables are quite cold, cut them up into ornamental shapes, and arrange them with the tomatoes and shalot very finely minced in a salad bowl, pour over a Mayonnaise sauce, and sprinkle the watercress on the top. Hard-boiled eggs may be added if liked.',
  serves:4,
  preparationTimeInMins:20,
},{
  name: 'Summer Pie',
  ingredients:[
    {name: 'green peas', amount: 0.5, measure: 'pound'},
    {name: 'cabbage lettuce', amount: 1},
    {name: 'onion', amount: 1},
    {name: 'egg', amount: 1},
    {name: 'chopped mint', amount: 1, measure: 'tablespoon'},
    {name: 'salt', amount: 0.5, measure: 'teaspoon'},
    {name: 'puff pastry'},
  ],
  instructions:'Shell the peas, and boil them in a little water with the salt and onion sliced. Well wash the lettuce, shred it, place in a pie-dish, and when the peas are done, add them, including the liquor in which they have been boiled (if there be more liquor than the pie-dish will conveniently hold, it should be added after the pie is cooked). Sprinkle the mint over the top, cover with paste in the usual way, brush over with the beaten egg, and bake in a rather hot oven for about three-quarters of an hour.',
  serves:6,
  preparationTimeInMins:60,
},
  {
  name: 'Stewed Pears',
  ingredients:[
    {name: 'pear', amount: 12},
    {name: 'water', amount: 1, measure: 'quart'},
    {name: 'loaf sugar', amount: 0.5, measure: 'pound'},
    {name: 'cinnamon stick', amount: 2, measure: 'inch'},
  ],
  instructions:'Peel the pears carefully and remove the cores, but leave them whole. Dissolve the sugar in the water, using an enamelled stewpan, place the pears in this and allow to simmer for two hours, keeping the lid on. Remove the stewpan from the fire, and stand it on one side _without_ the lid until the pears 116are perfectly cold, then carefully lift them out (they should be a beautiful red colour) into a glass dish. Strain the syrup into a small stewpan, boil over a good heat for about fifteen minutes (watching it carefully the latter portion), reduce to three tablespoons, pour over the pears, and allow to thoroughly cool before serving.',
  serves:6,
  preparationTimeInMins:280,
},{
  name: 'Alexandra Pie',
  ingredients:[
    {name: 'soaked haricot beans', amount: 1, measure: 'pint'},
    {name: 'carrot', amount: 1},
    {name: 'turnip', amount: 1},
    {name: 'onion', amount: 2},
    {name: 'liquor', amount: 0.5, measure: 'pint'},
    {name: 'butter', amount: 1, measure: 'ounce'},
    {name: 'mashed potato', amount: 0.5, measure: 'pound'},
    {name: 'breadcrumbs', amount: 2, measure: 'ounce'},
    {name: 'egg', amount: 1},
    {name: 'salt', amount: 1, measure: 'teaspoon'},
    {name: 'water', amount: 1, measure: 'quart'},
  ],
  instructions:'Slice the carrot, turnip and onions, boil them with the beans one and a half hours, add salt and boil half an hour, strain, turn the beans and vegetables on to a large plate and place on one side to cool. Dissolve the butter in a frying pan, and fry the beans and vegetables until slightly browned; turn into a pie dish, pour over the liquor which was strained off, place in the mashed potatoes, and lastly cover with the egg and bread crumbs well mixed. The white and yolk should be beaten separately. Bake in a rather hot oven until a nice brown.',
  serves:6,
  preparationTimeInMins:200,
},{
  name: 'Wholemeal Biscuits',
  ingredients:[
    {name: 'wholemeal flour', amount: 4, measure: 'ounce'},
    {name: 'white flour', amount: 2, measure: 'ounce'},
    {name: 'egg', amount: 1},
    {name: 'baking powder', amount: 0.5, measure: 'teaspoon'},
    {name: 'butter', amount: 1.5, measure: 'butter'},
    {name: 'sugar', amount: 1.5, measure: 'sugar'},
    {name: 'golden syrup', amount: 0.5, measure: 'tablespoon'},
  ],
  instructions:'Mix the two flours, the butter, baking powder, and sugar well together on the paste-board; make a hole in the centre into which break the egg, and pour in the syrup, then mix with the hand until all be thoroughly incorporated. Roll the paste very thin, stamp out the required size, prick over with a fork, and bake in a brisk oven until crisp.',
  serves:6,
  preparationTimeInMins:60,
},{
  name: 'Stuffed Vegetable Marrow',
  ingredients:[
    {name: 'vegetable marrow', amount: 1},
    {name: 'semolina', amount: 4, measure: 'ounce'},
    {name: 'water', amount: 1, measure: 'pint'},
    {name: 'egg', amount: 2},
    {name: 'onion', amount: 1},
    {name: 'sweet herbs', amount: 1, measure: 'teaspoon'},
    {name: 'salt', amount: 1, measure: 'teaspoon'},
    {name: 'pepper', amount: 1, measure: 'teaspoon'},
    {name: 'butter', amount: 2, measure: 'ounce'}],
  instructions:'After washing the marrow, cut off one end and scoop out all the seeds. Place in a saucepan the butter, semolina, onion chopped fine, sweet herbs, salt, pepper, and water; boil for fifteen minutes, then stand on one side to cool slightly; add the eggs beaten up, stuff the marrow with the mixture, and tie on the end. Grease a baking dish or tin with the remainder of the butter, and place in it the marrow. Bake for two hours, or until quite tender, basting frequently and turning it occasionally.\n\n _Note_.—A suitable sauce for this dish may be made by boiling the seeds in half a pint of water with a little salt, then strain and thicken with half ounce each of flour and butter. A sprig of mint may be used for flavouring. After dishing up the marrow, turn the sauce into the tin to brown, and pour through a strainer over the marrow.',
  serves:4,
  preparationTimeInMins:150,
}
]

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
          measure: { type: 'string' }
        },
        required: ['name', 'amount', 'measure']
      }
    },
  },
  required: ['name', 'instructions', 'serves', 'preparationTimeInMins', 'ingredients']
}

import { formatIngredientRequirement } from '~/ingredientLister'

describe('formatIngredientRequirement', () => {
  let ingredientFinder
  let measureFinder

  it('formats a single whole item', () => {
    const actual = format({name: 'apple', amount: 1})
    expect(actual).toEqual('1 apple')
  })

  it('formats multiple whole items', () => {
    const ingredientDetail = {singular: 'apple', plural: 'apples'}
    ingredientFinder = _ => ingredientDetail
    const actual = format({name: 'apple', amount: 2})
    expect(actual).toEqual('2 apples')
  })

  function format(item) {
    return formatIngredientRequirement(ingredientFinder, measureFinder, item)
  }
})

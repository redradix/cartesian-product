const isEmpty = require('lodash/isEmpty')
const flatMap = require('lodash/flatMap')

module.exports = (arr1, arr2) => {
  if (isEmpty(arr1)) {
    return arr2.map(x => ([x]))
  }
  if (isEmpty(arr2)) {
    return arr1.map(x => ([x]))
  }
  return flatMap(arr1, x => arr2.map(y => [x, y]))
}

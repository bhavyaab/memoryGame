'use strict'

module.exports = generateCombination
function generateCombination(){
  function getRandomInt() { return Math.floor(Math.random() * 3)}
  var combinationArray = []
  var lookup = {}
  var random
  function combination(){
    random = Math.floor(Math.random() * 4)
    !lookup[random]? lookup[random] = 0:
    lookup[random] > 3? combination() : combinationArray.push(random)
    lookup[random]++
    if (combinationArray.length < 12) return combination()
    return combinationArray
  }
  return combination()
}

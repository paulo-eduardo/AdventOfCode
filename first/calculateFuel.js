var routes = require('./route.json')

const calcFuelForFuel = fuel => {
  var needFuel = Math.floor(fuel / 3) - 2

  if (needFuel <= 0) return 0
  else return (needFuel += calcFuelForFuel(needFuel))
}

var totalFuelforModule = routes.map(x => {
  var moduleFuel = Math.floor(x / 3) - 2
  moduleFuel += calcFuelForFuel(moduleFuel)
  return moduleFuel
})

console.log(totalFuelforModule.reduce((sum, x) => sum + x, 0))

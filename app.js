

//
//
// var animals = [
//   { name: 'Fluffykins', species: 'rabbit' },
//   { name: 'Caro', species: 'dog'},
//   { name: 'Hamilton', species: 'dog'},
//   { name: 'Harold', species: 'fish'},
//   { name: 'Ursula', species: 'cat'},
//   { name: 'Jimmy', species: 'fish'}
// ]
//
// var isFish = function(animal){
//   return animal.species === 'fish';
// }
//
// var isNotFish = function(animal){
//   return animal.species !== 'fish';
// }
//
// var fish = animals.filter(isFish);
// var otherAnimals = animals.filter(isNotFish);
//
// // console.log(otherAnimals);
// // var names = animals.map(function(animal){
// //   return animal.name;
// // })
//
// var names = animals.map((animal) => animal.name)
//
// // console.log(names);
//
// var orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ]
//
// // var totalAmount = orders.reduce(function(sum, order){
// //   return sum + order.amount;
// // }, 0);
//
// var totalAmount = orders.reduce((sum,order) => sum + order.amount, 0)
//
// console.log(totalAmount);

// var dataTxt = "mark johansson  waffle iron 80  2\nmark johannson  blender 200 1\nmark johansson knife 10 4\nNikita Smith  waffle iron 80  1\nNikita Smith  knife 10 2\nNikita Smith  pot 20  3";
//
// var output = dataTxt
//     .trim()
//     .split('\n')
//     .map(line => line.split('\t'))
//     .reduce((customers, line)=> {
//       customers[line[0]] = customers[line[0]] || []
//     })
//
// console.log('output', output);

// let dragon = (name, size, element) =>
//   name + ' is a ' + size + ' dragon that breathes ' + element + '!';
//
// console.log(dragon('deathstar', 'enormous', 'fog'));

let dragons = [
  { name: 'memik', element: 'lighting' },
  { name: 'kulecnik', element: 'lighting' },
  { name: 'dudu', element: 'fire' },
  { name: 'xdman', element: 'timewarp' }
]

let hasElement =
  (element, obj) => obj.element === element

let lightingDragons =
  dragons.filter(dragon => hasElement('lighting', dragon))

console.log(lightingDragons);

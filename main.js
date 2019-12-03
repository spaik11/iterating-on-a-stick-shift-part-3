const dinos = require('./dinos.js');

// Some helpful hints as to the general strategy for making the map and filter functions below:

// Filter function:
// 1. Create a new array.
// 2. Iterate over the old array.
// 3. For every element that passes our test, push it into the new array.
// 4. Return the new array.

// Map function:
// 1. Create a new array.
// 2. Iterate over the old array.
// 3. For every element, push into the new array a TRANSFORMED version.
// 4. Return the new array.

const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species,
    period,
    carnivore,
    extinct
  }
}

const makeSingular = function(dinosaur) {
  const {species, period, carnivore, extinct} = dinosaur;
  const newDino = makeDino(species, period, carnivore, extinct);

  if (species.endsWith('us')) {
    newDino.species = species.slice(0, -2);
  }

  return newDino;
}

const truncateSpecies = function(dinosaur) {
  const {species, period, carnivore, extinct} = dinosaur;
  const newDino = makeDino(species, period, carnivore, extinct);

  if (species.length > 10) {
    newDino.species = species.slice(0, 7) + '...';
  }

  return newDino;
}

const makeExtinct = function(dinosaur) {
  const {species, period, carnivore} = dinosaur;
  const newDino = makeDino(species, period, carnivore, true);

  return newDino;

  // Alternately (but including line 1 of this function)
  
  // return {
  //   species,
  //   period,
  //   carnivore,
  //   extinct: true
  // }
}

const isCarnivore = function(dinosaur) {
  return dinosaur.carnivore === true;

  // Or, more simply:
  return dinosaur.carnivore
}

const isExtinct = function(dinosaur) {
  return dinosaur.extinct === true;

  // Or, more simply:
  // return dinosaur.extinct
}

const isTriassic = function(dinosaur) {
  return dinosaur.period === 'Triassic';
}

const isJurassic = function(dinosaur) {
  return dinosaur.period === 'Jurassic';
}

const isCretaceous = function(dinosaur) {
  return dinosaur.period === 'Cretaceous';
}

const singularizeDinos = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    newArr.push(makeSingular(dino))
  }

  return newArr;
}

const truncateDinos = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    newArr.push(truncateSpecies(dino))
  }

  return newArr;
}

const makeAllExtinct = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    newArr.push(makeExtinct(dino))
  }

  return newArr;
}

const carnivoresOnly = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    if (isCarnivore(dino)) {
      newArr.push(dino)
    }
  }

  return newArr;
}

const herbivoresOnly = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    if (!isCarnivore(dino)) {
      newArr.push(dino)
    }
  }

  return newArr;
}

const extinctOnly = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    if (isExtinct(dino)) {
      newArr.push(dino)
    }
  }

  return newArr;
}

const notExtinct = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    if (!isExtinct(dino)) {
      newArr.push(dino)
    }
  }

  return newArr;
}

const triassicOnly = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    if (isTriassic(dino)) {
      newArr.push(dino)
    }
  }

  return newArr;
}

const notTriassic = function(dinos) {
  let newArr = [];

  for (const dino of dinos) {
    if (!isTriassic(dino)) {
      newArr.push(dino)
    }
  }

  return newArr;
}


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
}
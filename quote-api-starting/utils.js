const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const filterQuotesByName = (person, arr) => {
  return arr.filter(e => e.person === person);
}

const findId = (id, arr) => {
  return arr.findIndex(e => e.id == id);
}

const newId = (arr) => {
  return arr[arr.length - 1].id + 1;
}

module.exports = {
  getRandomElement,
  filterQuotesByName,
  findId,
  newId
};

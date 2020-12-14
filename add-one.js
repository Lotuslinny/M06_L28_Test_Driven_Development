const addOne = function (numbers) {
  const newArray = numbers.map(numb => numb + 1);
  return newArray;
};

module.exports = addOne;


const removeFromArray = function(array, ...itemsToRemove) {
  return array.filter(function(item) {
    return !itemsToRemove.includes(item);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
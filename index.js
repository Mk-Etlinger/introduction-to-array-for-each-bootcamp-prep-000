function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
    array[index] = (Math.random() * 100).toString() + '!!!'
}
var animals = ["dog", "fish", "cat"]

var arr = [1, 2, 3]
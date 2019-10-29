export default function(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      array.splice(i, 1)
      i--
    }
  }
  return array
}

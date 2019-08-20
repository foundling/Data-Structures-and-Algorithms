function fys(array) {

  for (let last = array.length - 1; last > 0; last--) {

    let randIndex = Math.floor(Math.random() * last)

    let temp = array[randIndex]
    array[randIndex] = array[last]
    array[last] = temp

  } 

}

const a = [1,2,3,4,5]
fys(a)
console.log(a)

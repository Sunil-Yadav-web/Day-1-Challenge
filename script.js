const numInput = document.querySelector('.print-num')
const numInputReverse = document.querySelector('.print-num-rev')
const evenNumInput = document.querySelector('.even-number')
const sumNumInput = document.querySelector('.sum-number')
const productNumInput = document.querySelector('.product-number')
const evenSumNumInput = document.querySelector('.even-sum-number')
const squareNumInput = document.querySelector('.square-number')
const divideNumInput = document.querySelector('.divide-number')
const oddNumInput = document.querySelector('.odd-number')
const cubeNumInput = document.querySelector('.cube-number')
const evenSquareInput = document.querySelector('.even-square-number')
const numOutput = document.querySelector('.print-num-output')
const numOutputReverse = document.querySelector('.numOutputReverse')
const evenNumOutput = document.querySelector('.even-output')
const sumNumOutput = document.querySelector('.sum-output')
const productNumOutput = document.querySelector('.product-output')
const evenSumNumOutput = document.querySelector('.even-sum-output')
const squareNumOutput = document.querySelector('.square-output')
const divideNumOutput = document.querySelector('.divide-output')
const oddNumOutput = document.querySelector('.odd-output')
const cubeNumOutput = document.querySelector('.cube-output')
const evenSquareOutput = document.querySelector('.even-square-output')

function printNumber(input) {
  let num = ''
  for (let i = 1; i <= input; i++) {
    num += i + ','
    numOutput.innerText = num
  }
  numOutput.innerText = num
}

numInput.addEventListener('input', (e) => {
  printNumber(e.target.value)
})

function printNumberReverse(input) {
  let num = ''
   numOutputReverse.innerText = num
  for (let i = input; i >= 1; i--) {
    num += i + ','
    // console.log(num)
    numOutputReverse.innerText = num
  }
}

numInputReverse.addEventListener('input', (e) => {
  printNumberReverse(e.target.value)
})

function evenNumber(input) {
  let num = ''
   evenNumOutput.innerText = num
  for (let i = 1; i <= input; i++) {
   if(i % 2 === 0) {
    num += i + ','
   }
    evenNumOutput.innerText = num
  }
}

evenNumInput.addEventListener('input', (e) => {
  evenNumber(e.target.value)
})

function sumNumber(input) {
  let num = 0
  // for (let i = 0; i <= input; i++) {
  // num += i
  //   sumNumOutput.innerText = num
  // }
  num = (parseInt(input) * (parseInt(input) + 1)) / 2
  sumNumOutput.innerText = num || 0
}

sumNumInput.addEventListener('input', (e) => {
  sumNumber(e.target.value)
})

function productNumber(input) {
  let num = 1
   productNumOutput.innerText = num
  for (let i = 1; i <= input; i++) {
  num *= i
    productNumOutput.innerText = num
  }
}

productNumInput.addEventListener('input', (e) => {
  productNumber(e.target.value)
})

function evenSumNumber(input) {
  let num = 0
  evenSumNumOutput.innerText = num
  for (let i = 1; i <= input; i++) {
  if(i % 2 === 0 ) {
    num += i 
  }
    evenSumNumOutput.innerText = num
  }
}

evenSumNumInput.addEventListener('input', (e) => {
  evenSumNumber(e.target.value)
})


function squareNumber(input) {
  let num = ''
   squareNumOutput.innerText = num
  for (let i = 1; i <= input; i++) {
     if(i % 2 === 0 ) {
    num += i*i + ','
  }
    squareNumOutput.innerText = num
  }
}

squareNumInput.addEventListener('input', (e) => {
  squareNumber(e.target.value)
})


function divideNumber(input) {
  let num = ''
    divideNumOutput.innerText = num
  for (let i = 1; i <= input; i++) {
     if(i % 3 === 0 && i % 5 === 0 ) {
    num += i + ','
  }
    divideNumOutput.innerText = num
  }
}

divideNumInput.addEventListener('input', (e) => {
  divideNumber(e.target.value)
})

function oddSumNumber(input) {
  let num = 0
  oddNumOutput.innerText = num
  for (let i = 1; i <= input; i++) {
  if(i % 2 === 1 ) {
    num += i 
  }
    oddNumOutput.innerText = num
  }
}

oddNumInput.addEventListener('input', (e) => {
  oddSumNumber(e.target.value)
})

function cubeNumber(input) {
  let num = ''
   cubeNumOutput.innerText = num
  for (let i = 1; i <= input; i++) {
   num += i*i*i + ','
    cubeNumOutput.innerText = num
  }
}

cubeNumInput.addEventListener('input', (e) => {
  cubeNumber(e.target.value)
})

function evenSquareNumber(input) {
  let num = ''
   evenSquareOutput.innerText = num
  for (let i = 1; i <= input; i++) {
   if( Math.sqrt(i) % 2 === 0) {
    num += i + ','
   }
    evenSquareOutput.innerText = num
  }
}

evenSquareInput.addEventListener('input', (e) => {
  evenSquareNumber(e.target.value)
})

console.log('If input two number please give space between it. ');
// Code your solution in this file!
const returnFirstTwoDrivers = (arr => {
 return arr.slice(0, 2)
})

const returnLastTwoDrivers = (arr => {
 return arr.slice(-2)
})

let selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier (int){
    let fare = function (fareAmt){
        return int * fareAmt
    }
return fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func) {
  return func(arr)
}

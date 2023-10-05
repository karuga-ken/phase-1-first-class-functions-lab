const returnFirstTwoDrivers = function(kenny){
    return kenny.slice(0,2);
}
const returnLastTwoDrivers = function(kenny){
    return kenny.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (tripleFare = 3 ){
    return function (charges = 100){
        return tripleFare * charges
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (a, returnedDrivers){
    return returnedDrivers(a)
}

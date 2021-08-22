// Code your solution in this file!
//excercise -1
function distanceFromHqInBlocks(blockNum){
    if(blockNum>42){
        return blockNum-42
    }else if(blockNum<42){
        return (blockNum-42)*-1
    }
}
console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))
//excercise -2
function distanceFromHqInFeet(blockNum2){
    if(blockNum2>42){
        return (blockNum2-42)*264
    }else if(blockNum2<42){
        return (blockNum2-42)*-264
    }
}

console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))
// excercise -3
function distanceTravelledInFeet(startNum,endNum){
    if(startNum<endNum){
        return (endNum-startNum)*264
    }else if(startNum>endNum){
        return (endNum-startNum)*-264
    }
}

console.log(distanceTravelledInFeet(43,48))
console.log(distanceTravelledInFeet(50,60))
console.log(distanceTravelledInFeet(34,28))
// excercise -4

function calculatesFarePrice(startNum,endNum){
    const totalDistance = distanceTravelledInFeet(startNum,endNum)
    if(totalDistance<=400){
        return 0
    }else if(totalDistance>400 && totalDistance<=2000){
        return (totalDistance-400)*0.02
    }else if(totalDistance>2000 && totalDistance<2500){
        return 25
    }else{
        return "cannot travel that far"
    }
}
console.log(calculatesFarePrice(43, 44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24))
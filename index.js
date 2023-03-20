// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42)
  }

  function distanceFromHqInFeet(someValue) {
   const blocks =  distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
   const feet = blocks * 264
   return feet
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (264 * Math.abs( destination - start))
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const dis =  distanceTravelledInFeet(start, destination);
    if(dis > 0 && dis < 400){
        return 0
    }
    if( dis > 400 && dis <= 2000){

       return ((dis - 400) * 0.02)
    }
    else if(dis > 2000 && dis < 2500){
        return 25
    }
    else if(dis > 2500){
        return 'cannot travel that far'
    }
  }
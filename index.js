function distanceFromHqInBlocks(someValue) {
   let hq = 42
   return Math.abs(hq - someValue)
  }
distanceFromHqInBlocks(43) 
function distanceFromHqInFeet(someValue) {
   let blocks = distanceFromHqInBlocks(someValue)
   let feet = 264 * blocks
   return feet
}
distanceFromHqInFeet(43)
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}
distanceTravelledInFeet(1, 21)
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        const price = (distance - 400) * 0.02
        return price
    } else if (distance <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
calculatesFarePrice()


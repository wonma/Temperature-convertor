// Restaurant Seating Tracker

// Method : an object property whose value is a function.

let restaurant = {
    name: 'Sosabeol Pork',
    guestCapacity: 100,
    currentGuests: 0,
    checkAvailablity: function (partySize) {
        return this.guestCapacity - this.currentGuests >= partySize
    },
    
    seatParty: function (partySize) {
        if (this.checkAvailablity(partySize)){
            this.currentGuests = this.currentGuests + partySize
            return `You ${partySize}! Cool! come in please.`
        } else {
            let lackOfSeat = partySize - (this.guestCapacity - this.currentGuests)
            return `sorry, you need to wait for ${lackOfSeat} seat(s). `
        }
    },
    removeParty: function (partySize) {
        return this.currentGuests = this.currentGuests - partySize
    }
}
restaurant.currentGuests = 96
console.log(restaurant.seatParty(3))
console.log(restaurant.seatParty(4))
console.log(restaurant.removeParty(3))
console.log(restaurant.seatParty(4))

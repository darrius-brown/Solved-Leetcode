/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
   // index 0 is big
   // index 1 is medium
   // index 2 is small
    this.system = [big, medium, small]
    return null

};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    this.system[carType - 1] -= 1
    if (this.system[carType - 1] < 0) {
        return false
    }
    
    return true
    
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
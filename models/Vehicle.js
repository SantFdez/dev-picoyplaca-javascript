/**
 * Vehicle Class stands for describing vehicle 
 */
class Vehicle {
    /**
     * Creates a vehicle with parameters
     * @param  {string} plate identification for vehicle
     */
    constructor(plate) {
        /** @private */
        this.plate = plate;
    }

    // /**
    //  *  @getter 
    //  */
    // get plate() {
    //     return this.plate;
    // }

    // /**
    //  *  @setter 
    //  */
    // set plate(plate) {
    //     this.plate = plate;
    // }
}

export {
    Vehicle
}

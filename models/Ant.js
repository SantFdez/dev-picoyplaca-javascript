import {Vehicle} from './Vehicle.js';
/**
 * ANT Class stands for "Agencia Nacional de Transito" which is responsible for regulating and controlling national traffic
 */
class Ant {
    /**
     * Creates Ant with default configuration
     * @param  {string} plate identification for vehicle
     */
     constructor() {
        /** @private */
        this.pyp_laws = [
            [], 
            ["1","2"],
            ["3","4"],
            ["5","6"],
            ["7","8"],
            ["9","0"],
            []
        ];

        this.pyp_schedule = [
            ['05:00','09:30'],
            ['16:00','21:30']
        ]
    }

    /**
     * validateVehiclePyP Validate if a Vehicle could circulate
     * @param  {Vehicle} vehicle It is an object of Vehicle class
     * @return {Boolean} If vehicle can circulate or not
     */
    validateVehiclePyP(vehicle, date, time) {
        date = new Date(date);

        date.setHours(date.getHours() + 5 );

        let is_hour = true;

        for (let i = 0 ; i < this.pyp_schedule.length; i++) {
            if (time >= this.pyp_schedule[i][0] && time <= this.pyp_schedule[i][1]) {
                is_hour = false;
                break;
            }
        }

        return !this.pyp_laws[date.getDay()].includes(vehicle.plate.slice(-1)) || is_hour;
    }
}

export {
    Ant
}

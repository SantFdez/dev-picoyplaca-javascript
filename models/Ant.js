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
            ['06:00','09:30'],
            ['16:00','21:00']
        ]
    }

    /**
     * validateVehiclePyP Validate if a Vehicle can be on road
     * @param  {Vehicle} vehicle It is an object of Vehicle class
     * @param  {String} date Date in format YYYY-mm-dd
     * @param  {String} hour Hour in format hh:mm
     * @return {Boolean} If vehicle can be on road or not
     */
    validateVehiclePyP(vehicle, date, time) {
        let fullDate = `${date} ${time}`;
        let isAllowedHour = true;
        let isAllowedDay;
        let fullDateObj = new Date(fullDate);

        // Checks all time restrictions
        for (let i = 0 ; i < this.pyp_schedule.length; i++) {
            if (time >= this.pyp_schedule[i][0] && time <= this.pyp_schedule[i][1]) {
                isAllowedHour = false;
                break;
            }
        }
        
        // Checks all day restrictions
        isAllowedDay = !this.pyp_laws[fullDateObj.getDay()].includes(vehicle.plate.slice(-1));

        return isAllowedDay || isAllowedHour;
    }
}

export {
    Ant
}

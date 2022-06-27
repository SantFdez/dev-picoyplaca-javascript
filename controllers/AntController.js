import {Vehicle} from '../models/Vehicle.js';
import {Ant} from '../models/Ant.js';

const validateVehiclePyP = (req, res) => {
    const vehicle = new Vehicle(req.body.vehiclePlate);
    const ant = new Ant();
    const response = ant.validateVehiclePyP(vehicle, req.body.date, req.body.time);

    res.json({response});
}

export {
    validateVehiclePyP
}
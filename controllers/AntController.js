import {Vehicle} from '../models/Vehicle.js';
import {Ant} from '../models/Ant.js';
import { validateVehicleApi } from './AntControllerApi.js';

const validateVehicleGet = (req, res) => {
    const vehicle = new Vehicle(req.body.vehiclePlate);
    const ant = new Ant();
    const response = ant.validateVehiclePyP(vehicle, req.body.date, req.body.time);

    res.render('result', {response, data: req.body});
};

export {
    validateVehicleGet
}
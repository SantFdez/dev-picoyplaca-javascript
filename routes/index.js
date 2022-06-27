import express from 'express';
import {validateVehicleGet} from '../controllers/AntController.js'
import {validateVehicleApi} from '../controllers/AntControllerApi.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/result', validateVehicleGet);

router.post('/api/validate', validateVehicleApi);

export default router;

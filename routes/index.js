import express, { application } from 'express';
import {validateVehiclePyP} from '../controllers/AntController.js'

const router = express.Router();

router.post('/validate', validateVehiclePyP);

export default router;

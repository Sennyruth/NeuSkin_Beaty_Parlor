import {Router} from 'express'
import { verifyToken } from '../middlewares/verifyToken.js';
import { newAppointment, allAppointments,specificAppointment  } from '../Controllers/appointments.controllers.js';


const route = Router();
route.post('/appointments',verifyToken,newAppointment)
route.get('/appointments',allAppointments)
route.get('/specicificappo',verifyToken,specificAppointment)

export default route
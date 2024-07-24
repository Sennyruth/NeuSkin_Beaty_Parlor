import {Router} from 'express'
import { verifyToken } from '../middlewares/verifyToken.js';
import { AuthVerifyToken } from '../middlewares/AuthVerifyToken.middlewares.js';
import { newAppointment, allAppointments,specificAppointment,deleteAppointment,updateAppointment   } from '../Controllers/appointments.controllers.js';


const route = Router();
route.post('/appointments',verifyToken,newAppointment)
route.get('/appointments',AuthVerifyToken,allAppointments)
route.get('/specicificappo',verifyToken,specificAppointment)
route.patch('/updateappointment/:id',verifyToken,updateAppointment )
route.delete('/deleteappointment/:id',verifyToken,deleteAppointment)

export default route
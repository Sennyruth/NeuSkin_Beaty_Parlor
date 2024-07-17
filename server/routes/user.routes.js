import {Router} from 'express'
import { createUser} from '../Controllers/user.controllers.js'
import {loginUser} from '../Controllers/user.controllers.js'

const route = Router();

route.post("/register",createUser)
route.post("/login",loginUser)
export default route
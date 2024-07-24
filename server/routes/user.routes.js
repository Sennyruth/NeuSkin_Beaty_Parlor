import {Router} from 'express'
import { createUser} from '../Controllers/user.controllers.js'
import {loginUser} from '../Controllers/user.controllers.js'
import {getAllUsers } from "../Controllers/user.controllers.js"
import {deleteUser} from "../Controllers/user.controllers.js"

const route = Router();

route.post("/register",createUser)
route.post("/login",loginUser)
route.get("/getall",getAllUsers)
route.delete("/deleteuser/:id",deleteUser)
export default route
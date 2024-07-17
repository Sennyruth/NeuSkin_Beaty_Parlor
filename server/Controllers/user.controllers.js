import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient();


export const createUser = async (req, res ) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      if (!firstname)
        return res
          .status(400)
          .json({ message: false, message: "firstname is required" });
      if (!lastname)
        return res
          .status(400)
          .json({ message: false, message: "lastname is  required" });
      if (!email)
        return res
          .status(400)
          .json({ message: false, message: "email is required" });
      if (!password)
        return res
          .status(400)
          .json({ message: false, message: "password is required" });
      const userWithEmail = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });
      if (userWithEmail)
      return res.status(400).json({ message: false, message: "email is already taken" });
  
     
  
      const hashedPassword = await bcrypt.hashSync(password, 10);
      const newuser = await prisma.user.create({
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: hashedPassword,
        },
      });
      res.status(201).json({ success: true, message: newuser });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  export const loginUser = async (req, res) => {
    const {email, password } = req.body;
    try {
      const newUser = await prisma.user.findFirst({
        where: { email:email }
      })
      if (newUser) {
        const passwordMatch = bcrypt.compareSync(password, newUser.password);
  
        if (passwordMatch === true) {
          const payload ={
            id: newUser.id,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
  
          }
          const token = jwt.sign( payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
            });
            res.cookie("PT_access_token",token)
            res.status(200).json({ success: true, data: newUser });
           
        } else {
          res
            .status(400)
            .json({ message: false, message: "user not found" });
        }
      } else {
        res.status(400).json({ message: false, message: "user not found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  
  
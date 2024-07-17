import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();


export const newAppointment = async (req, res) => {
    const user = req.user;
    const { date, time, number, service } = req.body;
    const userId = user.id;
  
    try {
        const appointment = await prisma.appointments.create({
            data: {
                date: date,
                time: time,
                number: number,
                service: service,
                userId: userId

                },
                });
      res.status(201).json({ success: true, data:appointment });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  export const allAppointments = async (req, res) =>{
    try {
        const appointments = await prisma.appointments.findMany();
        res.status(200).json({ success: true, data: appointments });

        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });    
    }
  }

  export const specificAppointment = async (req,res) => {
    const user = req.user;
    const userId = user.id;
    try {
      const appointment = await prisma.appointments.findMany({where:{userId:userId},
        select: {
          id: true,
          date: true,
          time:true,
          number: true,
          service: true,
          userId: true,
        },
      })
      res.status(200).json({success:true,data:appointment})
   
    } catch (error) {
      res.status(500).json({success:false,message:error.message})
  
  
      
    }
  }
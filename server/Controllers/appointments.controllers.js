import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const newAppointment = async (req, res) => {
  const user = req.user;
  const clientEmail = user.email;

  const { date, number, service,time } = req.body;
  const userId = user.id;

  try {
    const appointment = await prisma.appointments.create({
      data: {
        date: date,
        number: number,
        time:time,
        service: service,
        userId: userId,
        clientEmail: clientEmail,
      },
    });
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const allAppointments = async (req, res) => {
  try {
    const appointments = await prisma.appointments.findMany();
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const specificAppointment = async (req, res) => {
  const user = req.user;
  const userId = user.id;
  try {
    const appointment = await prisma.appointments.findMany({
      where: { userId: userId },
      select: {
        id: true,
        date: true,
        time: true,
        number: true,
        service: true,
        userId: true,
        clientEmail: true,
      },
    });
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateAppointment = async (req, res) => {
  const user = req.user;
  const userId = user.id;
  const { id } = req.params;
  const { date,time, number, service, clientEmail } = req.body;
  try {
    const appointment = await prisma.appointments.update({
      where: { id: id },
      data: {
        date: date,
        time:time,
        number: number,
        service: service,
        userId: userId,
        clientEmail: clientEmail,
      },
    });
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const appointment = await prisma.appointments.delete({
      where: { id: id },
      select: {
        id: true,
        date: true,
        time:true,
        number: true,
        service: true,
        userId: true,
      },
    });
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

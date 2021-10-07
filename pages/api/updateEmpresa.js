import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async (req, res) => {
  const {
    id,
    status
  } = req.body;
  try {
    const updateEmpresa = await prisma.empresas.update({
      where: {
        id,
      },
      data: {
        status
      },
    });
    res.status(200).json(updateEmpresa);
  } catch (error) {
    res.status(403).json({ error });
  }
};
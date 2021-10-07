import prisma from "../../db";

export default async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const updateEmpresa = await prisma.empresas.update({
      where: {
        id,
      },
      data: {
        aprobado: true
      },
    });
    res.status(200).json(updateEmpresa);
  } catch (error) {
    res.status(403).json({ error });
  }
};
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const bancodedados = [
    { id: 16, name: "Gabriel Oliveira", cargo: "Desenvolvedor" },
    { id: 1, name: "admin", cargo: "Administrador" },
    { id: 6, name: "Juliana Ribeiro", cargo: "Designer" },
    { id: 12, name: "Maligno do milgrau", cargo: "Pintor" }
];

const userController = {
    test: (req, res) => {
        res.json({ message: "Messagem de teste" })
    },
    findbyid: async (req, res) => {
        const id = parseInt(req.query.id)
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!user) {
            return res.status(503).json({ message: "Usuario não foi encontrado" })
        } else {
            return res.status(200).json({ message: "Usuario encontrado", user })
        }
    },
    create: async (req, res) => {

        req.query.name || req.query.cargo
        const { name, cargo } = req.query

        const user = await prisma.user.create({
            data: {
                cargo: cargo,
                name: name
            }
        })

        if (!user) {
            return res.status(503).json({ message: "Usuario não foi criado" })
        } else {
            return res.status(200).json({ message: "Usuario criado", user })
        }
    }
}

module.exports = {
    userController
}

const bancodedados = [
  { id: 16, name: "Gabriel Oliveira", cargo: "Desenvolvedor" },
  { id: 1, name: "admin", cargo: "Administrador" },
  { id: 6, name: "Juliana Ribeiro", cargo: "Designer" },
];

const userController = {
  test: (req, res) => {
    return res.json({ message: "Mensagem de teste" });
  },
  findByid: (req, res) => {
    const id = parseInt(req.query.id);
    for (let i = 0; i < bancodedados.length; i++) {
      const element = bancodedados[i];
      if (element.id === id) {
        return res.json({ usuario: element });
      }
    }
    return res.json({ message: "usuario não encontrado" });
  },
};

module.exports = {
  userController,
};

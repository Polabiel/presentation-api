function checkId(req, res, next) {
    const id = parseInt(req.query.id);
    if (!id) {
        return res.json({ message: "ID não existe" })
    } else {
        next();
    }
}

function checkNameAndCargo(req, res, next) {
    const { name, cargo } = req.query
    if (!name || !cargo) {
        return res.json({ message: "Valores de cargo e nome não existem" })
    } else {
        next();
    }
}

module.exports = {
    checkId,
    checkNameAndCargo
}

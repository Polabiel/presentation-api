const express = require('express');
const { userRouter } = require('./Routes/User');
const app = express();

app.get("/", (req, res) => {
    res.json({message: "Hello, World!"})
})

app.use("/user",userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.clear();
    console.log(`Servidor da api está rodando na porta http://localhost:${PORT}\n
    http://177.220.18.2:3000`);
})

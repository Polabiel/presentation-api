const express = require("express");
const { userRouter } = require("./routes/userRouter");
const app = express();

app.use("/api/user", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando no endpoint http://localhost:${PORT}`);
});

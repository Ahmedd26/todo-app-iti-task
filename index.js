const express = require("express");
const todoRoutes = require("./routes/todoRouter");
const app = express();

app.use(express.json());
app.use("/api", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

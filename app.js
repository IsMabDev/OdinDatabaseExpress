require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);
console.log("my test envirenment",process.env.TEST_ENV);
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));

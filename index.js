const express = require("express");
const cors = require("cors");

const app = express();

const employeeRoutes = require("./routes/employees");

app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);

const port = 4000;
app.listen(port, () => console.log(`Server has started.`));

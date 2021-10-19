const express = require("express");
const cors = require("cors");

const app = express();

const employeeRoutes = require("./routes/employees");

app.use(cors());
const path = require("path");
app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

const port = 4000;
app.listen(port, () => console.log(`Server has started.`));


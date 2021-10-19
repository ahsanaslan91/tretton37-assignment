const express = require("express");
let router = express.Router();
const fs = require("fs");

// get all insurances
router.get("/", async (req, res) => {
  let data = fs.readFileSync("employees.json");
  let employees = JSON.parse(data);
  return res.send(employees);
});

module.exports = router;

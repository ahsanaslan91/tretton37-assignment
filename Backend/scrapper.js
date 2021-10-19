const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

getData();
async function getData() {
  var employeesArr = [];
  await axios.get("https://tretton37.com/meet").then((response) => {
    const $ = cheerio.load(response.data);
    $(".ninja-summary").each(function () {
      var employeeName = $(this)
        .find(".contact-info>h1>a")
        .html()
        .split("<span>")[0];

      var officeName = $(this).find(".contact-info>h1>a>span").text();
      var image = $(this).find(".portrait").attr("src");
      var obj = {
        employeeName,
        officeName,
        image,
      };
      employeesArr.push(obj);
    });
  });
  employeesArr = JSON.stringify(employeesArr);
  fs.writeFile("employees.json", employeesArr, "utf8", function () {
    console.log("File saved");
  });
}

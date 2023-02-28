const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");

//read file
const file = fs.readFileSync("Linux_Bash.pdf");

function sendFile(ip, port, id) {
  //target URL
  const url = new URL(`http://${ip}:${port}/upload`);

  //create FormData with attached file
  const form = new FormData();
  form.append("image", file, `kitten${id}.pdf`);

  //send FormData
  axios.post(url, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

//cycle
let i = 0;
const n = 100;
while (i < n) {
  sendFile("127.0.0.1", 4000, i);
  i++;
}

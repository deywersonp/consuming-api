const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get("/", async (request, response) => {

  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')

    response.json(data)

  } catch (error) {
    console.log(error)
  }
})

app.listen('4567', () => { console.log("Running on PORT 4567") })
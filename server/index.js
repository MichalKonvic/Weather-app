const express = require('express')
const fetch = require('node-fetch')
require('dotenv').config();
const app = express()
const port = process.env.SERVER_PORT || 3000;
async function fetchData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API}`);
    return await response.json();
}

app.get('/:city', async (req, res) => {
    const data = await fetchData(req.params.city);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
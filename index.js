require('dotenv').configDotenv();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json('Hi, this is AWS ec2 testing');
})


app.listen(process.env.PORT || 3000, () => {
    console.log('The server is running on (cicd)' + process.env.PORT || 3000);
})
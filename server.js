const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Router = require('./router/route')

const ConectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, ConectionParams
).then(() => {
    console.log("db parameter");

}).catch((err) => { console.log("error:", err); })

app.use(cors());
app.use(bodyParser.json())
app.use('/', Router)

app.listen(8080, () => {
    console.log('listening')
})

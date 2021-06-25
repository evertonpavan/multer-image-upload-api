const express = require('express')
const router = require("./routes")

require('express-async-errors');
require('dotenv').config()

const cors = require('cors')

const server = express()

server.use(express.json());

server.use(cors())

server.use('/images',router)

// error handler middleware
server.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});

server.listen(process.env.PORT || 3000, function () {
    console.log("server is running")
})
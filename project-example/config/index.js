require("dotenv").config()

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 4000
}

module.exports = config
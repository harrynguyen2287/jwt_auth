import config from "config"
import express from "express"

require("dotenv").config()

const app = express()

const port = config.get<number>("port")
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})

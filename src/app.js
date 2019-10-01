import "core-js/stable"
import "regenerator-runtime/runtime"

import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'

dotenv.config()

const server = express()


mongoose.connect(
    `mongodb://mongo:27017/${process.env.MOBGO_DB}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(process.env.PORT, () => {
    console.log(`API running on port: ${process.env.PORT}`)
})
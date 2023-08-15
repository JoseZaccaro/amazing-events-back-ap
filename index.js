import 'dotenv/config.js'
import express from "express"
import indexRouter from "./router/indexRouter.js"
import cors from 'cors'
import './config/database.js'
import errorHandler from './middlewares/errorHandler.js'
import notFoundHandler from './middlewares/notFoundHandler.js'
const server = express()

// const corsOptions = {
//     origin: 'http://localhost:5173/'
// }

server.use(cors())
server.use(express.json())


server.use('/api', (req, res, next) => {
    console.log('Hicieron una peticion a mi backend a la ruta:', req.url,
        "a la hora:", new Date().toLocaleString())
    console.log(req.method)
    next()
}, indexRouter)



server.get('/', (request, response, next) => {
    response.send('Bienvenido a mi servidor')
})

server.use(notFoundHandler)
server.use(errorHandler)

server.listen(process.env['PORT'], () => { console.log('Servidor corriendo en puerto ' + process.env['PORT']) })
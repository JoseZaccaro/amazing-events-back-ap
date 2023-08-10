import express from "express"
import indexRouter from "./router/indexRouter.js"

const server = express()

server.use('/api', indexRouter)

server.get('/', (request, response, next) => {
    response.send('Bienvenido a mi servidor')
})

server.listen(3000, () => { console.log('Servidor corriendo en puerto 3000') })
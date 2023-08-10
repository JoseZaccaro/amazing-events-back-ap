import { Router } from 'express';
import eventsRouter from './eventsRouter.js';
const indexRouter = Router()

indexRouter.get('/', (request, response, next) => {
    response.send('Bienvenido a mi servidor en /api')
})

indexRouter.use('/events', eventsRouter)


export default indexRouter
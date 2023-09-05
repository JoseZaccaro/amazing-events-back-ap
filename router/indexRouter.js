import { Router } from 'express';
import eventsRouter from './eventsRouter.js';
import categoriesRouter from './categoriesRouter.js';
import authRouter from './authRouter.js';
const indexRouter = Router()

indexRouter.get('/', (request, response, next) => {
    response.send('Bienvenido a mi servidor en /api')
})

indexRouter.use('/events', eventsRouter)
indexRouter.use('/categories', categoriesRouter)
indexRouter.use('/auth', authRouter)


export default indexRouter
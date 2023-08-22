import { Router } from 'express';
import eventsController from '../controllers/eventsController.js';
const eventsRouter = Router()
const { getAllEvents, getOneEvent, createOneEvent, updateOneEvent, deleteOneEvent } = eventsController

eventsRouter.get('/', getAllEvents)
eventsRouter.get('/:id', getOneEvent)

eventsRouter.post('/', createOneEvent)
eventsRouter.put( '/:id', updateOneEvent)
eventsRouter.delete( '/:id', deleteOneEvent)
// , ()=>{
//     console.log('Soy la funcion que sigue');
// }

export default eventsRouter
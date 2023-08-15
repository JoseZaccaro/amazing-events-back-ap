import { Router } from 'express';
import eventsController from '../controllers/eventsController.js';
const eventsRouter = Router()
const { getAllEvents, getOneEvent, createOneEvent } = eventsController

eventsRouter.get('/', getAllEvents)
eventsRouter.post('/', createOneEvent)
eventsRouter.get('/:id', getOneEvent)
// , ()=>{
//     console.log('Soy la funcion que sigue');
// }

export default eventsRouter
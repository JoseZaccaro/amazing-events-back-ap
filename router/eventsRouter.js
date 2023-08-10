import { Router } from 'express';
import eventsController from '../controllers/eventsController.js';
const eventsRouter = Router()
const { getAllEvents, getOneEvent } = eventsController

eventsRouter.get('/', getAllEvents)
eventsRouter.get('/:nombre', getOneEvent)
// , ()=>{
//     console.log('Soy la funcion que sigue');
// }

export default eventsRouter
import { Router } from 'express';
import categoriesController from '../controllers/categoriesController.js';
const categoriesRouter = Router()

categoriesRouter.get('/', categoriesController.getAllCategories)
categoriesRouter.get('/:id', categoriesController.getOneCategory)

categoriesRouter.post('/', categoriesController.createOneCategory)
categoriesRouter.put( '/:id', categoriesController.updateOneCategory)
categoriesRouter.delete( '/:id', categoriesController.deleteOneCategory)
// , ()=>{
//     console.log('Soy la funcion que sigue');
// }

export default categoriesRouter
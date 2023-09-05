import { Router } from 'express';
import authController from '../controllers/authController.js';
import { signUpSchema } from '../validators/signUpValidator.js';
import validator from './../middlewares/validator.js';
import { emailExists } from '../middlewares/emailExists.js';
const authRouter = Router()
const { signUp } = authController


authRouter.post('/', validator(signUpSchema), emailExists, signUp)


export default authRouter
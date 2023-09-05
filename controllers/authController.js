import User from "../models/User.js"
import bcrypt from 'bcryptjs'

const authController = {

    signUp: async (req, res, next) => {
        try {

            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            console.log(passwordHash)

            let body = { ...req.body }
            body.password = passwordHash

            const newUser = await User.create(body)

            const esIgual = bcrypt.compareSync(req.body.password, passwordHash)

            console.log(esIgual);

            return res.status(201).json({
                success: true,
                userData: newUser,
                message: 'Sign up successfully'
            })



        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

export default authController;
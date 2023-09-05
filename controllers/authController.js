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
    },

    signIn : async (req, res, next) => {
        try {

            let { email, password } = req.body

            const userInDB = await User.findOne( {email} )

            if( !userInDB ){
                throw new Error( "No user exists with this email " )
            }

            let passwordValidated = bcrypt.compareSync( password, userInDB.password )

            if( !passwordValidated ){
                throw new Error( "The email/password is incorrect" )
            }

            return res.status(200).json({
                success: true,
                userData: userInDB,
                message: 'Sign in successfully'
            })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

export default authController;
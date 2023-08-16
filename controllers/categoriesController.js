import Category from "../models/Category.js";


const categoriesController = {

    getAllCategories: async (req, res, next) => {
        try {
            const categories = await Category.find()
            res.status(201).json( { response : categories } )
        } catch (error) {
            res.status(500).json( {error})
        }
    
    },
    getOneCategory: async (req, res, next) => {
        
    },
    createOneCategory: async (req, res, next) => {

        try {
            const category = await Category.create( req.body )
            res.status(201).json( { response : category } )
        } catch (error) {
            res.status(500).json( {error})
        }
       
    },

    updateOneCategory : async(req, res, next) => {
        
    },
    
    deleteOneCategory : async(req, res, next) => {
    
    },


}

export default categoriesController;
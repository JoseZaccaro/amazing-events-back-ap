import eventos from '../eventos.js';
import Event from '../models/Event.js';
import Category from '../models/Category.js';

const eventsController = {
    getAllEvents: async (req, res, next) => {

        // query params

        let eventos;
        let error = null
        let success = true;
        try {
            eventos = await Event.find().populate( {
                path : 'category',
                select : 'category'
            } )
           /*  throw new Error("Error creado por mi") */
            res.json({
                response: eventos,
                success,
                error
            })
        } catch (err) {
            // console.log(err)
            success = false;
            error = err;
            next(err)
        }

        
    },
    getOneEvent: async (req, res, next) => {
        console.log(req.params)
        const { id } = req.params
        const { name } = req.body
        console.log(id);
        let eventos;
        let error = null
        let success = true;
        try {
            eventos = await Event.findById(id)
        } catch (err) {
            console.log(err)
            success = false;
            error = err;
        }

        res.json({
            response: eventos,
            success,
            error
        })
    },
    createOneEvent: async (req, res, next) => {

        console.log(req.body);
        let evento;
        let error = null
        let success = true;
        try {
            // const newEvent = new Event(req.body)

            // await newEvent.save()
            // console.log(newEvent)
            const category = await Category.findOne( { category : req.body.category } )
            const query = { ...req.body }
            query.category = category._id
            evento = await Event.create(query)
            console.log(evento);
        } catch (err) {
            console.log(err)
            success = false;
            error = err;
        }

        res.json({
            response: evento,
            success,
            error
        })
    },

    updateOneEvent : async(req, res, next) => {
        const { id } = req.params
        let evento;
        let success = true;
        try {
            evento = await Event.findOneAndUpdate( {_id: id}, req.body, { new: true } )
            res.json({
                response: evento,
                success
            })
        } catch (err) {
            success = false;
            next(err)
        }
        
    },
    
    deleteOneEvent : async(req, res, next) => {
        const { id } = req.params
        let evento;
        let success = true;
        try {
            evento = await Event.findOneAndDelete( {_id: id} )
            res.json({
                response: evento,
                success
            })
        } catch (err) {
            success = false;
            next(err)
        }
    },


}

export default eventsController;
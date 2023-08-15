import eventos from '../eventos.js';
import Event from '../models/Event.js';

const eventsController = {
    getAllEvents: async (req, res, next) => {
        let eventos;
        let error = null
        let success = true;
        try {
            eventos = await Event.find()
            throw new Error("Error creado por mi")
            
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
            evento = await Event.create(req.body)
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
    }
}

export default eventsController;
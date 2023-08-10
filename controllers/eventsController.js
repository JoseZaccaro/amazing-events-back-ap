import eventos from '../eventos.js';

const eventsController = {
    getAllEvents: (request, response, next) => {

        response.json({
            response: eventos,
            success: true,
            error: null
        })
    },
    getOneEvent: (req, res, next) => {
        console.log(req.params)
        const { nombre } = req.params
        const evento = eventos.find(evento => evento.nombre == nombre)
        res.json({
            response: evento,
            success: true,
            error: null
        })
        // next()
    }
}

export default eventsController;
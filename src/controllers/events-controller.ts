import EventsManager from '../managers/events-manager';
import AwsManager from '../aws';
import EventDetails from '../interfaces/event-details'
let filename = 'events.controller.ts';

export default class EventsController {
    /**
     * @description gets all events
     * @param req request for events
     * @param res response of events
     */
    public static async getAllEvents(req, res) {
        EventsManager.getAllEvents()
        .then((results) => {
            res.json({
                status: 200,
                data: results
            });
        })
        .catch(err => {
            res.json({
                status: 500,
                data: err.message
            });
            throw Error(`Error: ${filename} ${err}`)
        });
    }

    /**
     * @description gets all events
     * @param req request for events
     * @param res response of events
     */
    public static async getActiveEvents(req, res) {
        EventsManager.getActiveEvents()
        .then((results) => {
            res.json({
                status: 200,
                data: results
            });
        })
        .catch(err => {
            res.json({
                status: 500,
                data: err.message
            });
            throw Error(`Error: ${filename} ${err}`)
        });
    }

    /**
     * @description add event
     * @param req request for adding event
     * @param res response 
     */
    public static async addEvent(req, res) {
        //Add types for inputs from req
        let eventDetails: EventDetails = {} as EventDetails;
        eventDetails.title = req.title;
        eventDetails.date = req.date;
        eventDetails.description = req.description;
        eventDetails.picture = req.picture;
        
        EventsManager.addEvent(eventDetails);
    }
}
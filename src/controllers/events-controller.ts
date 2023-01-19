import EventsManager from '../managers/events-manager';
import AwsManager from '../managers/aws-manager';
import EventDetails from '../interfaces/event-details'
import { ManagedBlockchain } from 'aws-sdk';
import { ManagedUpload } from 'aws-sdk/clients/s3';
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
        EventsManager.addEvent(req.body)
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
        });;
    }

    public static async addEventPicture(req, res) {

        EventsManager.addEventPicture(req.file).then((response: any) => {
            res.send({
                status: 200,
                picture: response ? response.Location : null
            })
        }, (error: any) => {
            res.send({
                status: error.message? error.message.status : error.message,
                message: error.message,
                body: req.body
            })
        })
    }

    public static async approveEvent(req,res) {
        EventsManager.approveEvent(req.body.id, req.body.approved).then((response: any) => {
            res.send({
                status: 200,
                body: response
            })
        }, (error: any) => {
            res.send({
                status: error.message? error.message.status : error.message,
                message: error.message,
                body: req.body
            })
        })
    }
}
import * as fs from 'fs'
import * as express from 'express';
import * as path from 'path'
const router = express.Router();
import EventsController from '../controllers/events-controller'

/**
 * @description gets all events 
 */
router.route('/all').get(EventsController.getAllEvents);

/**
 * @description gets active events 
 */
router.route('/active').get(EventsController.getActiveEvents);

/**
 * @description uploads a picture
 */
//router.route('/add').post(EventsController.addEvent);


export const eventsRouter = router;
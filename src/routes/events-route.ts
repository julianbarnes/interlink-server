import * as fs from 'fs'
import * as express from 'express';
import * as path from 'path'
const multer = require('multer')
const upload = multer()

const router = express.Router();
import EventsController from '../controllers/events-controller'

/**
 * @description gets all events 
 */
router.get('/all', (req, res, next) => {
    return EventsController.getAllEvents(req, res)
});

/**
 * @description gets active events 
 */
router.get('/active', EventsController.getActiveEvents);

router.post('/add-picture', upload.single('picture'), EventsController.addEventPicture)

/**
 * @description uploads a picture
 */
router.post('/add', EventsController.addEvent);

/**
 * @description approves an event
 */
router.put('/approve', EventsController.approveEvent)

export const eventsRouter = router;
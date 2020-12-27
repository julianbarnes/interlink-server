
import { Event } from '../models/event.model'
import EventDetails from '../interfaces/event-details';
import DatabaseManager from '../database-manager'
import AwsManager from '../aws';
import ManagedUpload from '../interfaces/managed-upload';

const filename = "events-manager.ts";
/**
 * @class EventsManager 
 * @description handles all the logic dealing with events from organizing them to creating them
 */
export default class EventsManager {
    /**
     * @description returns promise that returns events in the database. Might need to be deprecated in the future or
     * at least have the response limited
     */
    public static getAllEvents() {
        return Event.find()
          .catch(err => { throw Error(`Error: ${filename} ${err}`)});
    }
    /**
     * @description retrieves all the events that are currently happenening or will happen in the future
     */
    public static getActiveEvents() {
        return Event.find({'active': 'true'}, 'title description');
    }
    /**
     * @description add an event to the database so that it can be retrieved later
     */
    public static async addEvent(eventDetails: EventDetails) {
      let managedUpload;
      if(eventDetails.picture) {
        managedUpload = await AwsManager.upload(eventDetails.title, eventDetails.picture) as ManagedUpload;
      }
      let event = new Event({
        title: eventDetails.title,
        description: eventDetails.description,
        date: eventDetails.date,
        picture: managedUpload.Location
      });
      await event.save().then(results => console.log(`${filename} Successfully added event`));
    }
}

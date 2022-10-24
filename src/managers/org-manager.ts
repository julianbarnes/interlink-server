import { Org } from '../models/org.model'
import OrgDetails from '../interfaces/org-details';
import DatabaseManager from '../database-manager'
var ObjectId = require('mongoose').Types.ObjectId; 

const filename = "org-manager.ts";
/**
 * @class OrgManager 
 * @description handles all the logic dealing with organizations from organizing them to creating them
 */
export default class OrgManager {
    /**
     * @description returns promise that returns events in the database. Might need to be deprecated in the future or
     * at least have the response limited
     */
    public static getOrgs() {
        return Org.find()
          .catch(err => { throw Error(`Error: ${filename} ${err}`)});
    }

    /**
     * @description adds an organization
     */
    public static addOrg(org: OrgDetails) {
      let newOrg = new Org({
        name: org.name,
        description: org.description,
        leaderId: org.leaderId
      })
      return newOrg.save().then(results => console.log(`${filename} Successfully added event`)).catch((error: Error) => {
        throw error;
      })
    }
}

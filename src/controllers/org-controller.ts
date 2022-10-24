import OrgManager from '../managers/org-manager';
import OrgDetails from '../interfaces/org-details'
let filename = 'org-controller.ts';

export default class OrgController {
    /**
     * @description gets orgs
     * @param req request for orgs
     * @param res response of orgs
     */
    public static async getOrgs(req, res) {
        OrgManager.getOrgs()
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
     * @description add orgs
     * @param req request for org
     * @res response for org addition
     */
    public static async addOrg(req, res) {
        OrgManager.addOrg(req.body)
        .then((results) => {
            res.json({
                status: 200, 
                data: results
            })
        })
        .catch(err => {
            res.json({
                status: 500,
                data: err.message
            });
            throw Error(`Error: ${filename} ${err}`)
        })
    }

}
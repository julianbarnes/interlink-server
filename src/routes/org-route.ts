import * as fs from 'fs'
import * as express from 'express';
import * as path from 'path'


const router = express.Router();
import OrgController from '../controllers/org-controller'

/**
 * @description gets all orgs 
 */
router.get('/', (req, res, next) => {
    return OrgController.getOrgs(req, res)
});

/**
 * @description adds an org
 */
router.post('/', (req, res, next) => {
    return OrgController.addOrg(req, res);
})

export const orgRouter = router;
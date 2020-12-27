import ManagedUpload from './interfaces/managed-upload'
var multer  = require('multer')
var multerS3 = require('multer-s3')
var upload = multer({ dest: 'uploads/' })
const AWS = require('aws-sdk');

/**
 * @class Aws
 * @description handles uploading and downloading from aws buckets
 */

 export default class Aws {
    private static filename: string = 'src/managers/aws-manager.ts';
    private static s3: any;
    public static start() {
        Aws.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    }
    public static async upload(title: string, object: any): Promise<ManagedUpload> {
        let date = new Date();
        const params = {
            Bucket: 'interlink-app',
            Key: `${title}-${date.toISOString}.jpg`,
            Body: object
        };
          //results contains the progress of the upload
        //return Aws.s3.upload(params);
        return Aws.s3.upload(params, function(err, results) {
            if (err) {
                console.log(Aws.filename + " " + err.message)
            }
        
            console.log(`File uploaded succesfully at ${results.Location}`)
            return results;
        });
        // return new Promise<ManagedUpload>(()=>{});
        // const upload = multer({
        //     storage: multerS3({
        //         s3: this.s3,
        //         bucket: 'interlink-app',
        //         metadata: function (req, file, cb) {
        //             cb(null, {fieldName: 'TESTING_META_DATA!'});
        //         },
        //         key: function (req, file, cb) {
        //             cb(null, Date.now().toString())
        //         }
        //     })
        // })
    }
 }
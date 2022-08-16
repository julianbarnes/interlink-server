import ManagedUpload from '../interfaces/managed-upload'
var multer  = require('multer')
var multerS3 = require('multer-s3')
var upload = multer({ dest: 'uploads/' })
const AWS = require('aws-sdk');

/**
 * @class Aws
 * @description handles uploading and downloading from aws buckets
 */

 export default class AwsManager {
    private static filename: string = 'src/managers/aws-manager.ts';
    private static s3: any;
    public static start() {
        AWS.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    }
    public static async upload(title: string, object: any): Promise<ManagedUpload> {
        this.start();
        let date = new Date();
        const params = {
            Bucket: 'interlink-app',
            Key: `${title}-${date.toISOString}.jpg`,
            Body: object
        };
          //results contains the progress of the upload
        //return Aws.s3.upload(params);
        // return AWS.s3.upload(params, function(err, results) {
        //     if (err) {
        //         console.log(AWS.filename + " " + err.message)
        //     }
        
        //     console.log(`File uploaded succesfully at ${results.Location}`)
        //     return results;
        // });

        const upload = await multer({
            storage: multerS3({
                s3: this.s3,
                bucket: 'interlink-app',
                metadata: function (req, file, cb) {
                    cb(null, {fieldName: 'TESTING_META_DATA!'});
                },
                key: function (req, file, cb) {
                    cb(null, Date.now().toString())
                }
            })
        })
        return upload;
    }
 }
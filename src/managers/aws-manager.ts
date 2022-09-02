import ManagedUpload from '../interfaces/managed-upload'
var multer  = require('multer')
var multerS3 = require('multer-s3')
var upload = multer({ dest: 'uploads/' })
const AWS = require('aws-sdk');
const fs = require('fs');
const { Readable } = require('stream');

/**
 * @class Aws
 * @description handles uploading and downloading from aws buckets
 */

 export default class AwsManager {
    private static filename: string = 'src/managers/aws-manager.ts';
    private static s3: any;
    public static start() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    }
    public static async upload(title: string, data: any): Promise<ManagedUpload> {
        this.start();
        let date = new Date();
        const params = {
            Bucket: 'interlink-app',
            Key: `${title}.jpg`,
            Body: Readable.from(data)

        };



        
        return this.s3.upload(params).promise();
        

    }
 }
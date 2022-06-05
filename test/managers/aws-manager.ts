// var assert = require('assert');
// import AwsManager from '../../src/aws';
// const fs = require('fs');
// const BlueBird = require('bluebird')


// describe('AWS S3', function () {
//     describe('upload', function () {
//         it('should return 1 when the value is not present', async function () {
//             //   assert.equal([1, 2, 3].indexOf(4), -1);
//             return fs.promises.readFile(`${process.cwd()}/googlemaps.png`).then(res =>{ 
//                 console.log(res);
//                 AwsManager.start();
//                 return AwsManager.upload('test', res).then(uploadRes => {
//                     console.log(uploadRes)
//                 });
//             });
//         });
//     });
// })
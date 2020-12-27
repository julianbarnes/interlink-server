const mongoose = require('mongoose');
const fs = require('fs');

/**
 * @class DatabaseManager
 * @description handles connecting to database so models can be used to retrieve records
 * 
 */
export default class DatabaseManager {
    
    public static s3: any;
    /**
     * @function start
     * @description starts the connection to the database so that models can be used to pull records
     */
    public static start() {
        //Connect to MongoDB
        const uri = process.env.ATLAS_URI;
        mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
        );
        const connection = mongoose.connection;
        connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
        })
        connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
        //Connect to aws bucket
    
        
    }
}


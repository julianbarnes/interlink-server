const express = require('express');
const cors = require('cors')
import DatabaseManager from './database-manager'
import AwsManager from './managers/aws-manager'
import { eventsRouter } from './routes/events-route'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//NOSQL Database
DatabaseManager.start();

//Picture Uploads

app.use('/events', eventsRouter);
// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

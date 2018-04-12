// Reference the database 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// creating a promise that can be used thourgh out the application
mongoose.Promise = global.Promise

const hostSchema = new Schema({ 
        name: {type: String,
            required: [true, 'Host name is required']
        },
        contactEmail: {type: String
        },
        contactNumber: {type: String
        },
        pictureUrl: {
            type: String
        } 
    })

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
const partySchema = new Schema({
        partyName: {type: String,
            required: [true, 'Party name is required']
        },
        location: {type: String
        },
        Date:{type: String
        },
        Time: {type:String
        },
        Theme: {type:String
        },
        Pictureurl: {type:String
        },
        host: [hostSchema]
    
})

const partyGoer = new Schema({
    partyGoerName: {type: String,
    required: [true, 'Party goer name is required']},
    costume: {type: String
    },
    Food: {type: String
    },
    Gift: {type: String
    },
    contactEmail: {type: String
    },
    contactNumber: {type: String
    },
    pictureUrl: {type: String
    },
    party: [partySchema]
})
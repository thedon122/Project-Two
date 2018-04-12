// Reference the database 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// creating a promise that can be used thourgh out the application
mongoose.Promise = global.Promise

const partyGoerSchema = new Schema({
    partyGoerName: {type: String,
    required: [true, 'Party goer name is required']},
    costume: {type: String
    },
    food: {type: String
    },
    gift: {type: String
    },
    contactEmail: {type: String
    },
    contactNumber: {type: String
    },
    pictureUrl: {type: String,
        default: 'https://facts.be/app/uploads/FACTS-2016-By-FilleRoelants-333-670x447.jpg'
    },
})
const partySchema = new Schema({
        partyName: {type: String,
            required: [true, 'Party name is required']
        },
        street: {type: String
        },
        city: {type: String
        },
        state: {type: String
        },
        date:{type: String
        },
        time: {type:String
        },
        theme: {type:String
        },
        pictureurl: {type:String
        },
        partyGoerParty: [partyGoerSchema]
})

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
    }, 
    hostToParty: [partySchema]
})

module.exports = {
    hostSchema,
    partySchema,
    partyGoerSchema
}
var db = require("../db");

var studentSchema = db.Schema({
    
    name : String,
    age : Number,
    std : String,
    address : String
    
});

module.exports = db.model('Student', studentSchema);
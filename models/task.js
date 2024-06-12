const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {type: String, requird: true},
    description: {type:String,requird: false},
    completed:{type:Boolean,default: false}
})
module.exports = mongoose.model('task',taskSchema);
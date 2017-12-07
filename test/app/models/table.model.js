import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var TableSchema = new Schema({
    firstName: String,
    content: {
        type: String,
        content:String
    }
});

mongoose.model('Table', TableSchema);

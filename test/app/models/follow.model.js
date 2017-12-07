import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var FollowSchema = new Schema({
    follower: number,
    follwing: number
});

mongoose.model('Table', FollowSchema);
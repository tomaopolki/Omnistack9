const mongoose = require ('mongoose');

var os = require('os');
var networkInterfaces = os.networkInterfaces();
var arr = networkInterfaces['Ethernet']
var ip = arr[1].address

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String, 
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    toJSON: {
        virtuals: true
    },
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://${ip}:3333/files/${this.thumbnail}`;
})
module.exports = mongoose.model('Spot', SpotSchema);
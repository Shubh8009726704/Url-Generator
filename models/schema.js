const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/DBforShortURLGen').then(()=>{
    console.log('connected to database')}).catch((err)=>{
        console.log(err)
    })

// Schema 
const UrlSchema = new mongoose.Schema({
    ShortID:{
        type:String,
        required:true,
        unique:true
    },
    RedirectURL:{
        type:String,
        required:true
    },
    VisitedHistory:[{
        timestamp:{type:Number}
    }],
});

// model 
const URL = mongoose.model('TableforShortURLGen',UrlSchema)

// exporting the model
module.exports = URL;


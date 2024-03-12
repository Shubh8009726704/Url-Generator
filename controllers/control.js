const URL = require("../models/schema");
const shortid = require('shortid');

//get or show all the short url

const api =async (req,res)=>{
    const data = await URL.find({})
    res.json(data)
}

const allusers = async(req,res)=>{
    const all = await URL.find({});
    res.render('home',{urls:all})
}

//post or generate a short url
const GeneratenewShortURL = async (req,res) => {
    const body = req.body;
    const ShortID = shortid()
    await URL.create({
        ShortID: ShortID,
        RedirectURL: body.url,
        VisitedHistory: [],
    })
    res.redirect('/url')
}

const redirecttoOriginalPage = ('/:shortid',async(req, res) => {
    const ShortID  = req.params.shortid
    const entry = await URL.findOneAndUpdate({ShortID:ShortID},{
        $push: {VisitedHistory:{
            timestamp: Date.now()
        }}
    });
    res.redirect(entry.RedirectURL)
})

const Analytics = ('/analytics/:shortid',async(req, res) => {
    const ShortID  = req.params.shortid
    const result = await URL.findOne({ShortID:ShortID});
    res.json({Totalclick:result.VisitedHistory.length,analytics:result.VisitedHistory})
})
module.exports = {GeneratenewShortURL,redirecttoOriginalPage,Analytics,allusers,api}
    

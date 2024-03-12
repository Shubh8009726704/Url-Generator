const {GeneratenewShortURL,redirecttoOriginalPage,Analytics,allusers,api} = require('../controllers/control');
const express = require('express');
const router = express.Router();

router.get('/',allusers)
router.get('/api',api)
router.post('/',GeneratenewShortURL);
router.get('/:shortid',redirecttoOriginalPage)
router.get('/analytics/:shortid',Analytics)

module.exports = router ;
const router = require('express').Router();
const path = require('path');

router.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname,'../public/home.html'))
})

router.get('/addexercises', (req,res)=>{
  res.sendFile(path.join(__dirname,'../public/addexercise.html'))
})
router.get('/addworkout', (req,res)=>{
  res.sendFile(path.join(__dirname,'../public/addworkout.html'))
})

module.exports = router;
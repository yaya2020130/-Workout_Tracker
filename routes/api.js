const router = require('express').Router();
const Workout = require('../models')

router.get('/workouts', (req,res)=>{
  //do some db stuff get workouts from mongodb
  Workout.find({}).then(data=>res.json(data))
})

router.post('/workouts', ({body},res)=>{
  Workout.create(body).then(data=>res.json(data))
})
//(req,res){req.body.somethign, req.params.id}
router.put('/workouts/:id', ({body,params},res)=>{
  Workout.findByIdAndUpdate({_id:params.id}, {$push:{exercises: body}}).then(data=>res.json(data))
})

module.exports = router;
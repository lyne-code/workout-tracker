const router = require("express").Router()
const db = require("../models")

router.get("/api/workouts", function(req,res){
    db.Workout.find().then(function(data){
        res.json(data)
    })
})

router.post("/api/workouts", function(req,res){
    db.Workout.create(req.body).then(function(data){
        res.json(data)
    })
})

router.put("/api/workouts/:id", function(req,res){

    db.Workout.update({_id: req.params.id}, {$push:{
        exercises: req.body
    }}).then(function(data){
        res.json(data)
    })
   
})

router.get("/api/workouts/range", function(req,res){
    db.Workout.find().then(function(data){
        res.json(data)
    })
})

module.exports = router